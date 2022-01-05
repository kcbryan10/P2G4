const {
  User,
  Student,
  Teacher,
  Weekly_Timeslot,
  Lesson,
} = require('../../models');

const userData = [
  {
    email: 'james@mail.com',
    password: 'password',
  },
  {
    email: 'patricia@mail.com',
    password: 'password',
  },
  {
    email: 'robert@mail.com',
    password: 'password',
  },
  {
    email: 'mary@mail.com',
    password: 'password',
  },
];

module.exports = {
  seedUser,
  seedStudent,
  seedTeacher,
  seedWeekly_Timeslot,
  seedLesson,
};
