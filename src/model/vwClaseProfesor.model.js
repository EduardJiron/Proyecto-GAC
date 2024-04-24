
const { DataTypes,Model } = require("sequelize");
const sequelize = require("../config/connection");

class VwClaseProfesor extends Model {}

VwClaseProfesor.init({
    id_clase: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    cod_clase: {
        type: DataTypes.STRING
    },
    nombre_profesor: {
        type: DataTypes.STRING
    },
    hora_inicio: {
        type: DataTypes.TIME
    },
    hora_final: {
        type: DataTypes.TIME
    },
    dia: {
        type: DataTypes.STRING
    },
    id_profesor: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: "vwClaseProfesor",
    tableName: "vwClaseProfesor",
    timestamps: false
});

module.exports = VwClaseProfesor;
