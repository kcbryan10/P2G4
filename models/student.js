const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Student extends Model {}

Student.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  {
    first_name: DataTypes.STRING,
    allowNull: false,
  },
  {
    last_name: DataTypes.STRING,
    allowNull: false,
  },
  {
    user_id: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "student",
  }
);
module.exports = Student;
