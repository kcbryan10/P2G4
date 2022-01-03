const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Specialty extends Model {}

Specialty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    specialty_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'specialties',
  }
);

module.exports = Specialty;
