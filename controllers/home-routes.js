const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
    currentUser: req.session.username,
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard/');
    return;
  }
  res.render('login');
});

router.get('/teacher-signup', (req, res) => {
  res.render('teacher-signup');
});

module.exports = router;
