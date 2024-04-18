const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class periodo_academicoModel extends Model {}

periodo_academicoModel.init(
  {
    periodo_academico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_final: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "periodo_academico",
    timestamps: false,
  }
);

module.exports = periodo_academicoModel;
