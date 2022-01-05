const router = require('express').Router();

const lessonRoutes = require('./lesson-routes');
const userRoutes = require('./users-routes');
const weeklyTimeslotRoutes = require('./weekly_timeslot-routes');

router.use('/lessons', lessonRoutes);
router.use('/users', userRoutes);
router.use('/weeklytimeslots', weeklyTimeslotRoutes);

module.exports = router;
