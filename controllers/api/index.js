const router = require('express').Router();

const lessonRoutes = require('./lesson-routes');
const userRoutes = require('./users-routes.js');
const weekly_timeslotRoutes = require('./weekly_timeslot-routes');

router.use('/lessons', lessonRoutes);
router.use('/users', userRoutes);
router.use('/weekly_timeslots', weekly_timeslotRoutes);

module.exports = router;
