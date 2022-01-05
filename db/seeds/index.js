const sequelize = require('../../config/connection');
const {
  seedUser,
  seedStudent,
  seedTeacher,
  seedWeekly_Timeslot,
  seedLesson,
} = require('./seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedStudent();
  await seedTeacher();
  await seedWeekly_Timeslot();
  await seedLesson();

  process.exit(0);
};

seedAll();
