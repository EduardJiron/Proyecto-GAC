
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class vwInscrito extends Model { }

vwInscrito.init(
    {
        id_clase: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        id_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "vwInscrito",
        timestamps: false,
    }
    )
    module.exports = vwInscrito