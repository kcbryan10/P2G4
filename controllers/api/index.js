const router = require('express').Router();

const lessonRoutes = require('./lesson-routes');

router.use('/lessons', lessonRoutes);

module.exports = router;
