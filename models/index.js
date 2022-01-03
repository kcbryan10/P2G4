const User = require('./user');
const Lesson = require('./Lesson');
const Teacher = require("./teacher");
const Student = require("./student");
const Timeslot = require("./timeslot");

User.hasOne(Student, {
    foreignKey: 'user_id'
});

User.hasOne(Teacher, {
    foreignKey: 'user_id',
});

Student.hasMany(Lesson, {
    foreignKey: 'student_id'
});

Teacher.hasMany(Timeslot, {
    foreignKey:'teacher_id'
});

Timeslot.hasMany(Lesson, {
    foreignKey: 'timeslot_id'
});




module.exports = { User, Lesson, Comment, Specialties, Teacher, Student};
