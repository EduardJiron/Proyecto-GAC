const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RolModel extends Model {}

RolModel.init(
  {
    id_rol: {
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
    tableName: "rol",
    timestamps: false,
  }
);

module.exports = RolModel;
