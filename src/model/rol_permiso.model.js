const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection"); // tu instancia de Sequelize

class RolPermisoModel extends Model {}

RolPermisoModel.init(
  {
    id_rol_permiso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_permiso: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: 'rol_permiso',
    timestamps: false // Si la tabla no tiene timestamps (created_at, updated_at)
  }
);

module.exports = RolPermisoModel;