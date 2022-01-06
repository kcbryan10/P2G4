const router = require('express').Router();
const { Weekly_Timeslot, Teacher, Lesson } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all from weekly timeslots. Probably unneccesary for current goals, but why not
router.get('/', (req, res) => {
  Weekly_Timeslot.findAll({
    include: [
      {
        model: Teacher,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbTimeslotData => res.json(dbTimeslotData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route by id
router.get('/:id', (req, res) => {
  Weekly_Timeslot.findAll({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Teacher,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbTimeslotData => res.json(dbTimeslotData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route by day
router.get('/day/:day', (req, res) => {
  Weekly_Timeslot.findAll({
    where: {
      day: req.params.day
    },
    include: [
      {
        model: Teacher,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbTimeslotData => res.json(dbTimeslotData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route by start_date
router.get('/start_date/:start_date', (req, res) => {
  Weekly_Timeslot.findAll({
    where: {
      start_date: req.params.start_date
    },
    include: [
      {
        model: Teacher,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbTimeslotData => res.json(dbTimeslotData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post route
router.post('/', withAuth, (req, res) => {
  Weekly_Timeslot.create(req.body)
    .then(dbTimeslotData => res.json(dbTimeslotData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update route
router.put('/:id', withAuth, (req, res) => {
  Weekly_Timeslot.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTimeslotData => {
      if (!dbTimeslotData) {
        res.status(404).json({ message: 'ID of this timeslot was not found' });
        return;
      }
      res.json(dbTimeslotData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete route
router.delete('/:id', withAuth, (req, res) => {
  Weekly_Timeslot.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTimeslotData => {
      if (!dbTimeslotData) {
        res.status(404).json({ message: 'ID of this timeslot was not found' });
        return;
      }
      res.json(dbTimeslotData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;