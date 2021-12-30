const router = require('express').Router();
const { Weekly_Timeslots, Teachers, Lessons } = require('../../models');

//Get all from weekly timeslots. Probably unneccesary for current goals, but why not
router.get('/', (req, res) => {
  Weekly_Timeslots.findAll({
    include: [
      {
        model: Teachers,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route by id
router.get('/:id', (req, res) => {
  Weekly_Timeslots.findAll({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Teachers,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route by day. It'll need a redirect. might be able to do day:day instead. I can't test it so I'll come back to it later.
router.get('/day/:day', (req, res) => {
  Weekly_Timeslots.findAll({
    where: {
      day: req.params.day
    },
    include: [
      {
        model: Teachers,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get route by start_date. same as above. might be able to use start_date:start_date
router.get('/start_date/:start_date', (req, res) => {
  Weekly_Timeslots.findAll({
    where: {
      start_date: req.params.start_date
    },
    include: [
      {
        model: Teachers,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
