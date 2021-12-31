const router = require('express').Router();
const { Lesson, Student, Teacher } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Lesson.findAll({
    where: {
      student_id: req.session.student_id,
    },
    include: [
      {
        model: Weekly_Timeslot,
        attributes: ['teacher_id', 'day'],
        include: {
          model: Teacher,
          attributes: ['first_name', 'last_name'],
        },
      },
    ],
  })
    .then((dbLessonData) => {
      const lessons = dbLessonData.map((lesson) => lesson.get({ plain: true }));

      res.render('dashboard', {
        lessons,
        loggedIn: req.session.loggedIn,
        currentUser: req.session.first_name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500).json(err);
    });
});

module.exports = router;
