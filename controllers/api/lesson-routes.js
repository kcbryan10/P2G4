const router = require('express').Router();
const { Lesson, Student, Weekly_Timeslot } = require('../../models');
const withAuth = require('../../utils/auth');

// READ all lessons (/api/lessons)
router.get('/', (req, res) => {
  Lesson.findAll({
    attributes: ['id', 'start_date', 'end_date'],
    order: [['start_date', 'DESC']],
    include: [
      {
        model: Student,
        attributes: ['id', 'first_name', 'last_name']
      },
      {
        model: Weekly_Timeslot,
        attributes: ['id', 'day', 'start_time', 'teacher_id']
      }
    ]
  })
    .then((dbLessonData) => res.json(dbLessonData))
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// READ lesson by id (/api/lessons/:id)
router.get('/:id', (req, res) => {
  Lesson.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'start_date', 'end_date'],
    order: [['start_date', 'DESC']],
    include: [
      {
        model: Student,
        attributes: ['id', 'first_name', 'last_name']
      },
      {
        model: Weekly_Timeslot,
        attributes: ['id', 'day', 'start_time', 'teacher_id']
      }
    ]
  })
    .then((dbLessonData) => {
      if (!dbLessonData) {
        res.status(404).json({ message: 'No lesson found with this id' });
        return;
      }
      res.json(dbLessonData);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// CREATE lesson (/api/lessons)
router.post('/', withAuth, (req, res) => {
  // expects { start_date, student_id }
  Lesson.create({
    start_date: req.body.start_date,
    student_id: req.session.student_id,
    end_date: req.body.end_date || null,
    timeslot_id: req.body.timeslot_id || null
  })
    .then((dbLessonData) => {
      res.json(dbLessonData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE lesson (/api/lessons/:id)
router.put('/:id', withAuth, (req, res) => {
  Lesson.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((dbLessonData) => {
      if (!dbLessonData) {
        res.status(404).json({ message: 'No lesson found with this id' });
        return;
      }
      res.json(dbLessonData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE lesson (/api/lessons/:id)
router.delete('/:id', withAuth, (req, res) => {
  Lesson.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then((dbLessonData) => {
      if (!dbLessonData) {
        res.status(404).json({ message: 'No lesson found with this id' });
        return;
      }
      res.json(dbLessonData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
