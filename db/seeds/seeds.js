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

const teacherData = [
  {
    first_name: 'James',
    last_name: 'Jameson',
    bio: 'A bio for James',
    user_id: 1,
  },
  {
    first_name: 'Patricia',
    last_name: 'Patriciason',
    bio: 'A bio for Patricia',
    user_id: 2,
  },
];

const studentData = [
  {
    first_name: 'Robert',
    last_name: 'Robertson',
    user_id: 3,
  },
  {
    first_name: 'Mary',
    last_name: 'Maryson',
    user_id: 4,
  },
];

const weekly_timeslotData = [
  {
    day: 1,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 1,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 1,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 1,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 1,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 2,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 2,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 2,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 2,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 2,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 1,
  },
  {
    day: 1,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 1,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 1,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 1,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 1,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 2,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 2,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 2,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 2,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
  {
    day: 2,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 2,
  },
];

const lessonData = [
  {
    timeslot_id: 1,
    student_id: 1,
    start_date: '2021/12/01',
  },
  {
    timeslot_id: 5,
    student_id: 2,
    start_date: '2021/12/01',
  },
  {
    timeslot_id: 11,
    student_id: 1,
    start_date: '2021/12/01',
  },
  {
    timeslot_id: 17,
    student_id: 2,
    start_date: '2021/12/01',
  },
];

const seedUser = () => User.bulkCreate(userData);
const seedTeacher = () => Teacher.bulkCreate(teacherData);
const seedStudent = () => Student.bulkCreate(studentData);
const seedWeekly_Timeslot = () =>
  Weekly_Timeslot.bulkCreate(weekly_timeslotData);
const seedLesson = () => Lesson.bulkCreate(lessonData);

module.exports = {
  seedUser,
  seedStudent,
  seedTeacher,
  seedWeekly_Timeslot,
  seedLesson,
};
