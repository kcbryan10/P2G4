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

const seedUsers = async () => {
  await User.create(userdata[0], { individualHooks: true });
  await User.create(userdata[1], { individualHooks: true });
  await User.create(userdata[2], { individualHooks: true });
  await User.create(userdata[3], { individualHooks: true });
}
module.exports = seedUsers;