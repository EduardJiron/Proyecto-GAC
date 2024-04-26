

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class vwClaseEstudiante extends Model { }

vwClaseEstudiante.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    id_clase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "VwEstudianteClase",
    timestamps: false,
  }
) 
module.exports = vwClaseEstudiante