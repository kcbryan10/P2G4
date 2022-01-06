const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lesson extends Model { }

Lesson.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    timeslot_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'weekly_timeslot',
        key: 'id',
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'lesson',
  }
);

module.exports = Lesson;
