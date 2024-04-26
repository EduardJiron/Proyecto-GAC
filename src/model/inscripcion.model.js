
const {Model, DataTypes } = require("sequelize");
const sequelize = require ('../config/connection');

class InscripcionModel extends Model {}

InscripcionModel.init(
    {
        id_inscripcion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_inscripcion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    },
    {
        sequelize,
        modelName: 'Inscripcion',
        tableName: "inscripcion",
        timestamps: false
    }
);
module.exports = InscripcionModel;