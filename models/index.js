const User = require('./user');
const Lesson = require('./Lesson');
const Teacher = require("./teacher");
const Student = require("./student");
const Weekly_timeslots = require("./weekly_timeslots");

User.hasOne(Student, {
    foreignKey: 'user_id'
});

User.hasOne(Teacher, {
    foreignKey: 'user_id',
});

Student.hasMany(Lesson, {
    foreignKey: 'student_id'
});

Teacher.hasMany(Weekly_timeslots, {
    foreignKey:'teacher_id'
});

Weekly_timeslots.hasMany(Lesson, {
    foreignKey: 'timeslot_id'
});




module.exports = { User, Lesson, Comment, Specialties, Teacher, Student};
