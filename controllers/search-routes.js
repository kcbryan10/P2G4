const router = require('express').Router();

router.get('/', (req, res) => { 
    res.render('search', {
        loggedIn: req.session.loggedIn,
        currentUser: req.session.first_name,
    });
});


module.exports=router;
