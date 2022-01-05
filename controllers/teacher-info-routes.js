const router = require('express').Router();
const { DateTime } = require('luxon');
const { Teacher, Weekly_Timeslot, Lesson } = require('../models');

router.get('/:id', (req, res) => {
  Teacher.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['first_name', 'last_name', 'bio'],
    include: [
      {
        model: Weekly_Timeslot,
        include: [
          {
            model: Lesson,
            required: false,
          },
        ],
      },
    ],
  })
    .then((dbTeacherData) => {
      if (!dbTeacherData) {
        res.status(404).json({ message: 'No teacher found with this id' });
      }

      // serialize
      const teacher = dbTeacherData.get({ plain: true });

      // format times to 12 hour
      teacher.weekly_timeslots.forEach((timeslot) => {
        const startTime = DateTime.fromSQL(timeslot.start_time).toLocaleString(
          DateTime.TIME_SIMPLE
        );

        const endTime = DateTime.fromSQL(timeslot.end_time)
          .plus({ minutes: 1 })
          .toLocaleString(DateTime.TIME_SIMPLE);

        timeslot.start_time = startTime;
        timeslot.end_time = endTime;
      });

      res.render('teacher-info', {
        teacher,
        loggedIn: req.session.loggedIn,
        currentUser: req.session.first_name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
