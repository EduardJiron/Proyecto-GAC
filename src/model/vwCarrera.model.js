const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Vwcarrera extends Model {}

Vwcarrera.init(
  {
    id_carrera:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    Carrera: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Facultad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "vwCarrera",
    timestamps: false,
    autoIncrement: false,
  }
);
module.exports = Vwcarrera;
