const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class EvaluacionModel extends Model { }

EvaluacionModel.init(
    {
        id_evaluacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo_evaluacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        calificacion: {
            type: DataTypes.DECIMAL,
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

        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "evaluacion",
        timestamps: false,
    }
);

module.exports = EvaluacionModel;
