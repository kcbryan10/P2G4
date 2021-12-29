const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weekly_Timeslots extends Model { }

Weekly_Timeslots.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    day: {
      type: DataTypes.INTEGER,
      //use SELECT DATENAME(dw, day);
      //1 defaults to sunday 7 defaults to saturday
      validate: {
        isNumeric: true,
        min: 1,
        max: 7
      }
    },
    start_time: {
      type: DataTypes.TIME
      //There doesn't seem to be a good validation method for time.
      //I'd recommend a drop down menu of some kind for setting or manual js validation.
      //Documentation is also lacking but it seems to work from what I've read.
    },
    end_time: {
      type: DataTypes.TIME
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    end_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teachers',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'weekly_timeslots',
  }
);

module.exports = Weekly_Timeslots;
