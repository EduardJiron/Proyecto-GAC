/*

SELECT TOP (1000) [id_estudiante]
      ,[id_clase]
      ,[id_periodo]
      ,[Estudiante]
      ,[Clase]
      ,[Estado]
  FROM [gac24].[dbo].[vwIncripcion]

*/

const {Model, DataTypes } = require("sequelize");
const sequelize = require ('../config/connection');

class vwIncripcion extends Model {}

vwIncripcion.init(
    {
        id_inscripcion:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        
        id_estudiante: {
            type: DataTypes.INTEGER,
            allowNull: false,
          
        },
        id_clase: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_periodo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Estudiante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Clase: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'vwIncripcion',
        tableName: "vwIncripcion",
        timestamps: false
    }
);
module.exports = vwIncripcion;