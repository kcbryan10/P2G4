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


//get route by day

//get route by start_date

