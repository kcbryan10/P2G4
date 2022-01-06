const router = require('express').Router();
const { Lesson, Teacher, Weekly_Timeslot } = require('../models');
const withAuth = require('../utils/auth');
const { DateTime } = require('luxon');

router.get('/', withAuth, (req, res) => {
  Lesson.findAll({
    where: {
      student_id: req.session.student_id,
    },
    include: [
      {
        model: Weekly_Timeslot,
        attributes: ['teacher_id', 'day', 'start_time', 'end_time'],
        include: {
          model: Teacher,
          attributes: ['first_name', 'last_name'],
        },
      },
    ],
  })
    .then((dbLessonData) => {
      const lessons = dbLessonData.map((lesson) => lesson.get({ plain: true }));

      // format times to 12 hour
      lessons.forEach((lesson) => {
        const startTime = DateTime.fromSQL(
          lesson.weekly_timeslot.start_time
        ).toLocaleString(DateTime.TIME_SIMPLE);

        const endTime = DateTime.fromSQL(lesson.weekly_timeslot.end_time)
          .plus({ minutes: 1 })
          .toLocaleString(DateTime.TIME_SIMPLE);

        lesson.weekly_timeslot.start_time = startTime;
        lesson.weekly_timeslot.end_time = endTime;
      });

      res.render('dashboard', {
        lessons,
        loggedIn: req.session.loggedIn,
        currentUser: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
