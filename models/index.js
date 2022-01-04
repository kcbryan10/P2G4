const User = require('./user');
const Lesson = require('./Lesson');
const Teacher = require('./teacher');
const Student = require('./student');
const Weekly_Timeslot = require('./Weekly_Timeslot');
const Specialties = require('./Specialties')

User.hasOne(Student, {
    foreignKey: 'user_id'
});

User.hasOne(Teacher, {
    foreignKey: 'user_id',
});

Student.hasMany(Lesson, {
    foreignKey: 'student_id'
});

Teacher.hasMany(Weekly_Timeslot, {
    foreignKey:'teacher_id'
});

Weekly_Timeslot.hasMany(Lesson, {
    foreignKey: 'timeslot_id'
});

Teacher.hasMany(Specialties, {
    foreignKey: 'specialty_name'
})



module.exports = { User, Lesson, Comment, Specialties, Teacher, Student};
