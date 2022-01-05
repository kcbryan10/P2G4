const router = require('express').Router();
const sequelize = require('../config/connection');
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
        // attributes: [
        //   [
        //     sequelize.literal(
        //       '(SELECT * FROM weekly_timeslot w LEFT JOIN lesson l ON w.id = l.timeslot_id WHERE l.timeslot_id IS NULL)'
        //     ),
        //     'available_timeslots',
        //   ],
        // ],
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
