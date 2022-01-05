const sequelize = require('../config/connection');
const { Lesson } = require('../models');

const lessonData = [
  {
    timeslot_id: 1,
    student_id: 1,
    start_date: '2021/12/01'
  },
  {
    timeslot_id: 5,
    student_id: 2,
    start_date: '2021/12/01'
  },
  {
    timeslot_id: 11,
    student_id: 1,
    start_date: '2021/12/01'
  },
  {
    timeslot_id: 17,
    student_id: 2,
    start_date: '2021/12/01'
  },
];

const seedLessons = () => Lesson.bulkCreate(lessonData);

module.exports = seedLessons;