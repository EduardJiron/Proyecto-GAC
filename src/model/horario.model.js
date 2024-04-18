const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class HorarioModel extends Model { }

HorarioModel.init(
    {
        id_horario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hora_inicio: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        hora_final: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        dia: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "horario",
        timestamps: false,
    }
);

module.exports = HorarioModel;