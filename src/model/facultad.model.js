const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FacultadModel extends Model {}

FacultadModel.init(
  {
    id_facultad: {
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

    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "facultad",
    timestamps: false,
  }
);

module.exports = FacultadModel;
