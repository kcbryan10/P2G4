const seedUsers = require('./user-seeds');
const seedLessons = require('./lesson-seeds');
const seedStudents = require('./student-seeds');
const seedTeachers = require('./teacher-seeds');
const seedWeeklyTimeslots = require('./weekly_timeslot-seeds');
const seedSpecialities = require('./specialities-seeds');
const seedTeacherSpecialities = require('./teacherSpecialities-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedTeachers();
  console.log('--------------');

  await seedStudents();
  console.log('--------------');

  await seedWeeklyTimeslots();
  console.log('--------------');

  await seedLessons();
  console.log('--------------');

  await seedSpecialities();
  console.log('--------------');

  await seedTeacherSpecialities();
  console.log('--------------');

  process.exit(0);
};

seedAll();
