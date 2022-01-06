const router = require('express').Router();
const { Student, User } = require('../../models');
const withAuth = require('../../utils/auth');

// READ all Students (/api/students)
router.get('/', (req, res) => {
  Student.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'email'],
      },
    ],
  })
    .then((dbStudentData) => res.json(dbStudentData))
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// READ Student by id (/api/students/:id)
router.get('/:id', (req, res) => {
  Student.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'email'],
      },
    ],
  })
    .then((dbStudentData) => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No Student found with this id' });
        return;
      }
      res.json(dbStudentData);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// READ Student by user_id (/api/students/user/:id)
router.get('/user/:id', (req, res) => {
  Student.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'email'],
      },
    ],
  })
    .then((dbStudentData) => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No Student found with this id' });
        return;
      }
      res.json(dbStudentData);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// CREATE Student (/api/students)
router.post('/', withAuth, (req, res) => {
  Student.create(req.body)
    .then((dbStudentData) => {
      req.session.save(() => {
        req.session.student_id = dbStudentData.id;
        req.session.username = dbStudentData.first_name;
        res.json(dbStudentData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE Student (/api/students/:id)
router.put('/:id', withAuth, (req, res) => {
  Student.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbStudentData) => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No Student found with this id' });
        return;
      }
      res.json(dbStudentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE Student (/api/students/:id)
router.delete('/:id', withAuth, (req, res) => {
  Student.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbStudentData) => {
      if (!dbStudentData) {
        res.status(404).json({ message: 'No Student found with this id' });
        return;
      }
      res.json(dbStudentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
