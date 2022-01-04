const router = require('express').Router();
const { Lesson, Teacher } = require('../models');
const withAuth = require('../utils/auth');
const { DateTime } = require('luxon');

//TODO: remove comment
router.get(
  '/',
  /*withAuth,*/ (req, res) => {
    /*Lesson.findAll({
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
    }
  )
  .then((dbLessonData) => {
    //TODO: remove comment
    //const lessons = dbLessonData.map((lesson) => lesson.get({ plain: true }));

    //TODO: remove dummy data
    */
    const lessons = [
      {
        weekly_timeslot: {
          start_time: '13:00:00',
          end_time: '13:59:00',
          teacher_id: 1,
          day: 1,
        },
      },
      {
        weekly_timeslot: {
          start_time: '14:00:00',
          end_time: '14:59:00',
          teacher_id: 1,
          day: 2,
        },
      },
      {
        weekly_timeslot: {
          start_time: '15:00:00',
          end_time: '15:59:00',
          teacher_id: 1,
          day: 3,
        },
      },
    ];

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
      currentUser: req.session.first_name,
    });
  }
);
// .catch((err) => {
//   console.log(err);
//   res.sendStatus(500).json(err);
// });
// }
//);

// search without specialties

// search with specialties
router.get('/search/:specialtyId', (req, res) => {
  Specialty.findAll({
    where: {
      specialty_id: req.params.specialtyId,
    },
    include: [
      {
        model: Teacher,
        attributes: ['first_name', 'last_name'],
        include: [
          {
            model: Weekly_Timeslot,
            include: [
              {
                model: Lesson,
              },
            ],
          },
        ],
      },
    ],
  }).then((dbSpecialtyData) => {
    res.render('search', {
      loggedIn: req.session.loggedIn,
      currentUser: req.session.first_name,
    });
  });
});

module.exports = router;
