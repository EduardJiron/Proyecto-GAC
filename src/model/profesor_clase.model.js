const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection"); // tu instancia de Sequelize

class ProfesorClaseModel extends Model {}

ProfesorClaseModel.init(
  {
    id_profesor_clase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_clase: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    id_profesor: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: 'Profesor_clase',
    timestamps: false 
  }
);

module.exports = ProfesorClaseModel;