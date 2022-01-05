const router = require('express').Router();
const { Specialties, Teacher, User } = require('../../models');
const withAuth = require('../../utils/auth');

// READ all specialities (/api/specialities)
router.get('/', (req, res) => {
  Specialties.findAll({
    include: [
      {
        model: Teacher,
        as: 'teachers',
        attributes: ['id', 'first_name', 'last_name', 'bio'],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((dbSpecialitiesData) => res.json(dbSpecialitiesData))
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// READ speciality by id (/api/specialities/:id)
router.get('/:id', (req, res) => {
  Specialties.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Teacher,
        as: 'teachers',
        attributes: ['id', 'first_name', 'last_name', 'bio'],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((dbSpecialitiesData) => {
      if (!dbSpecialitiesData) {
        res.status(404).json({ message: 'No speciality found with this id' });
        return;
      }
      res.json(dbSpecialitiesData);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
});

// CREATE speciality (/api/specialities)
router.post('/', withAuth, (req, res) => {
  // expects { start_date, student_id }
  Specialties.create(req.body)
    .then((dbSpecialitiesData) => {
      res.json(dbSpecialitiesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE speciality (/api/specialities/:id)
router.put('/:id', withAuth, (req, res) => {
  Specialties.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((dbSpecialitiesData) => {
      if (!dbSpecialitiesData) {
        res.status(404).json({ message: 'No speciality found with this id' });
        return;
      }
      res.json(dbSpecialitiesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE speciality (/api/specialities/:id)
router.delete('/:id', withAuth, (req, res) => {
  Specialties.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then((dbSpecialitiesData) => {
      if (!dbSpecialitiesData) {
        res.status(404).json({ message: 'No speciality found with this id' });
        return;
      }
      res.json(dbSpecialitiesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
