const router = require('express').Router();
const { Specialties, Teacher } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  res.render('search', {
    loggedIn: req.session.loggedIn,
    currentUser: req.session.username,
  });
});

router.get('/:id', async (req, res) => {
  const [results, meta] = await sequelize.query(`
  SELECT *
  FROM specialties
  INNER JOIN teacher_specialties ON specialties.id = teacher_specialties.specialties_id
  INNER JOIN teacher ON teacher_specialties.teacher_id = teacher.id
  WHERE teacher_specialties.specialties_id=${req.params.id}`);
  console.log(results);

  res.render('search', {
    loggedIn: req.session.loggedIn,
    currentUser: req.session.username,
    teacher: results,
    specialty_name: results[0].specialty_name,
  });
});

module.exports = router;
