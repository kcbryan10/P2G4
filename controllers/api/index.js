const router = require('express').Router();

const lessonRoutes = require('./lesson-routes');
const userRoutes = require('./users-routes');
const weeklyTimeslotRoutes = require('./weekly_timeslot-routes');
const studentRoutes = require('./student-routes');
const teacherRoutes = require('./teacher-routes');
const specialitiesRoutes = require('./specialities-routes');

router.use('/lessons', lessonRoutes);
router.use('/users', userRoutes);
router.use('/weeklytimeslots', weeklyTimeslotRoutes);
router.use('/students', studentRoutes);
router.use('/teachers', teacherRoutes);
router.use('/specialities', specialitiesRoutes);

module.exports = router;
