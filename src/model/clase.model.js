const {Model, DataTypes } = require("sequelize");
const sequelize = require ('../config/connection');

class ClaseModel extends Model {}

ClaseModel.init(
    {
        id_clase: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,           
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cod_clase: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_horario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        periodo_academico: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        //Llamar a la conexión.
        sequelize,
        tableName: "clase",
        timestamps: false
    }
);

//Se exporta el Modelo.
module.exports = ClaseModel