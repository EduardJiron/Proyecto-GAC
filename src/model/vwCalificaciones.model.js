/*

 [id_calificacion]
      ,[id_clase]
      ,[Alumno]
      ,[calificacion]
      ,[nombre]
  FROM [gac24].[dbo].[vwCalificacion]



*/

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class vwCalificaciones extends Model {}

vwCalificaciones.init(
    {
        id_calificacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        id_clase: {
        type: DataTypes.INTEGER,
        },
        Alumno: {
        type: DataTypes.STRING,
        },
        id_estudiante: {
        type: DataTypes.INTEGER,
        },
        calificacion: {
        type: DataTypes.INTEGER,
        },
        nombre: {
        type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: "vwCalificacion",
        timestamps: false,
    }
    );

module.exports = vwCalificaciones;

