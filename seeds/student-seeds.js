const sequelize = require('../config/connection');
const { Student } = require('../models');

const studentData = [
  {
    first_name: 'Robert',
    last_name: 'Robertson',
    user_id: 3
  },
  {
    first_name: 'Mary',
    last_name: 'Maryson',
    user_id: 4
  }
];

const seedStudents = () => Student.bulkCreate(studentData);

module.exports = seedStudents;