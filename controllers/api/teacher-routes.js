const router = require('express').Router();
const { Teacher, User } = require('../../models');
const withAuth = require('../../utils/auth');

// READ all Teachers (/api/teachers)
router.get('/', (req, res) => {
  Teacher.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'email']
      }
    ]
  })
    .then((dbTeacherData) => res.json(dbTeacherData))
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// READ Teacher by id (/api/teachers/:id)
router.get('/:id', (req, res) => {
  Teacher.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ['id', 'email']
      }
    ]
  })
    .then((dbTeacherData) => {
      if (!dbTeacherData) {
        res.status(404).json({ message: 'No Teacher found with this id' });
        return;
      }
      res.json(dbTeacherData);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// CREATE Teacher (/api/teachers)
router.post('/', withAuth, (req, res) => {
  Teacher.create(req.body)
    .then((dbTeacherData) => {
      res.json(dbTeacherData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE Teacher (/api/teachers/:id)
router.put('/:id', withAuth, (req, res) => {
  Teacher.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((dbTeacherData) => {
      if (!dbTeacherData) {
        res.status(404).json({ message: 'No Teacher found with this id' });
        return;
      }
      res.json(dbTeacherData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE Teacher (/api/teachers/:id)
router.delete('/:id', withAuth, (req, res) => {
  Teacher.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then((dbTeacherData) => {
      if (!dbTeacherData) {
        res.status(404).json({ message: 'No Teacher found with this id' });
        return;
      }
      res.json(dbTeacherData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
