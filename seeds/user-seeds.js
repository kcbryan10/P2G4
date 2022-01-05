const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    email: 'james@mail.com',
    password: 'password'
  },
  {
    email: 'patricia@mail.com',
    password: 'password'
  },
  {
    email: 'robert@mail.com',
    password: 'password'
  },
  {
    email: 'mary@mail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
