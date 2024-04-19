const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection"); // tu instancia de Sequelize

class EstudianteClaseModel extends Model {}

EstudianteClaseModel.init(
  {
    id_estudiante_clase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    id_clase: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: 'estudiante_clase',
    timestamps: false 
  }
);

module.exports = EstudianteClaseModel;