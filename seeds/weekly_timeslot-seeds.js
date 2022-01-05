const sequelize = require('../config/connection');
const { Weekly_Timeslot } = require('../models');

const weeklyTimeslotData = [
  {
    day: 1,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 1,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 1,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 1,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 1,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 2,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 2,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 2,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 2,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 2,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 1
  },
  {
    day: 3,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 3,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 3,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 3,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 3,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 4,
    start_time: '12:00:00',
    end_time: '12:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 4,
    start_time: '13:00:00',
    end_time: '13:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 4,
    start_time: '14:00:00',
    end_time: '14:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 4,
    start_time: '15:00:00',
    end_time: '15:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  },
  {
    day: 4,
    start_time: '16:00:00',
    end_time: '16:59:00',
    start_date: '2021/12/01',
    teacher_id: 2
  }
];

const seedWeeklyTimeslots = () => Weekly_Timeslot.bulkCreate(weeklyTimeslotData);

module.exports = seedWeeklyTimeslots;