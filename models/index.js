const User = require('./user');
const Lesson = require('./Lesson');
const Teacher = require('./teacher');
const Student = require('./student');
const Weekly_Timeslot = require('./Weekly_Timeslot');

User.hasOne(Student, {
  foreignKey: 'user_id',
});

User.hasOne(Teacher, {
  foreignKey: 'user_id',
});

Teacher.hasMany(Weekly_Timeslot, {
  foreignKey: 'teacher_id',
});

Weekly_Timeslot.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
});

Student.hasMany(Lesson, {
  foreignKey: 'student_id',
});

module.exports = { User, Teacher, Student, Weekly_Timeslot, Lesson };
