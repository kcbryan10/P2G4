const sequelize = require('../config/connection');
const { Teacher } = require('../models');

const teacherData = [
  {
    first_name: 'James',
    last_name: 'Jameson',
    bio: 'a bio for James',
    user_id: 1
  },
  {
    first_name: 'Patricia',
    last_name: 'Patriciason',
    bio: 'a bio for Patricia',
    user_id: 2
  }
];

const seedTeachers = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeachers;