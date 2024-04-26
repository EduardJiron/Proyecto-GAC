
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class vwProfesorClaseModel extends Model {}

vwProfesorClaseModel.init(
  {
    id_profesor_clase:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_clase: {
      type: DataTypes.INTEGER,
   
    },
    clase: {
      type: DataTypes.STRING,
    },
    cod_clase: {
      type: DataTypes.STRING,
    },
    id_profesor: {
      type: DataTypes.INTEGER,
    },
    Profesor: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "VwProfesorClase",
    timestamps: false,
  }
);

module.exports = vwProfesorClaseModel;