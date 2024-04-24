
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class vwClase extends Model {}

vwClase.init(
    {
        id_clase: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        },
        nombre_clase: {
        type: DataTypes.STRING,
        },
        descripcion: {
        type: DataTypes.STRING,
        },
        cod_clase: {
        type: DataTypes.STRING,
        },
        horario: {
        type: DataTypes.STRING,
        },
        
        fecha_inicio: {
        type: DataTypes.DATE,
        },
        fecha_final: {
        type: DataTypes.DATE,
        },
        
        estado: {
        type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: "vwClase",
        tableName: "vwClase",
        timestamps: false,
    }
    );

module.exports = vwClase;