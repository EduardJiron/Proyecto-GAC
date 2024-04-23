const {Model, DataTypes } = require("sequelize");
const sequelize = require ('../config/connection');

class AsistenciaModel extends Model {}

AsistenciaModel.init(
    {
        id_asistencia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,           
        },
        asistencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        justificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id_clase: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_estudiante: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_profesor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        //Llamar a la conexión.
        sequelize,
        tableName: "asistenciaS",
        timestamps: false
    }
);

//Se exporta el Modelo.
module.exports = AsistenciaModel