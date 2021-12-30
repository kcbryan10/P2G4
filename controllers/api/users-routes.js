const router = require('express').Router();
const { Users, Teachers, Students } = require('../../models');
const sequelize = require('../../config/connection');

// get all Users
router.get('/', (req, res) => {
  Users.findAll({
    attributes: [
      'id',
      'email',
      //This part could be removed. or it might not work. mixing ands and ors can get dicey. Also it's just plain weird. I like weird
      [sequelize.literal("(SELECT TABLE_NAME FROM lesson_scheduler_db.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND (teachers.user_id = users.id OR students.user_id = users.id)"), 'user_role']
    ]
  })
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Users.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
  })
    .then(dbUsersData => {
      if (!dbUsersData) {
        res.status(404).json({ message: 'No Users found with this id' });
        return;
      }
      res.json(dbUsersData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Users.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUsersData => {
      req.session.save(() => {
        req.session.users_id = dbUsersData.id;
        req.session.email = dbUsersData.email;
        req.session.loggedIn = true;

        res.json(dbUsersData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUsersData => {
    if (!dbUsersData) {
      res.status(400).json({ message: 'No Users with that email address!' });
      return;
    }

    const validPassword = dbUsersData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.users_id = dbUsersData.id;
      req.session.email = dbUsersData.email;
      req.session.loggedIn = true;

      res.json({ Users: dbUsersData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  Users.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUsersData => {
      if (!dbUsersData) {
        res.status(404).json({ message: 'No Users found with this id' });
        return;
      }
      res.json(dbUsersData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUsersData => {
      if (!dbUsersData) {
        res.status(404).json({ message: 'No Users found with this id' });
        return;
      }
      res.json(dbUsersData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
