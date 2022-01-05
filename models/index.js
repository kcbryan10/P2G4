const User = require('./user');
const Lesson = require('./Lesson');
const Teacher = require('./teacher');
const Student = require('./student');
const Weekly_Timeslot = require('./Weekly_Timeslot');
const Specialties = require('./Specialties');

// User
User.hasOne(Student, {
    foreignKey: 'user_id'
});

User.hasOne(Teacher, {
    foreignKey: 'user_id',
});

// Student

Student.belongsTo(User, {
    foreignKey:'user_id'
});

Student.hasMany(Lesson, {
    foreignKey: 'student_id'
});

// Teacher

Teacher.belongsTo(User, {
    foreignKey:'user_id'
});

Teacher.hasMany(Weekly_Timeslot, {
    foreignKey:'teacher_id'
});

Teacher.hasMany(Specialties, {
    foreignKey: 'specialties_id'
});

Teacher.belongsToMany(Specialties, {
    through: 'teacher_specialties',
    as: 'teacher',
    foreignKey:'specialties_id'
});




// Weekly Timeslot 

Weekly_Timeslot.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
})

Weekly_Timeslot.hasMany(Lesson, {
    foreignKey: 'timeslot_id'
});


// Lesson 

Lesson.belongsTo(Weekly_Timeslot, {
    foreignKey:'timeslot_id'
});

Lesson.belongsTo(Student, {
    foreignKey: 'student_id'
});


// Specialties 

Specialties.belongsToMany(Teacher, {
    through: 'teacher_specialties',
    as: 'specialties',
    foreignKey:'teacher_id'
});




module.exports = { User, Lesson, Comment, Specialties, Teacher, Student};
