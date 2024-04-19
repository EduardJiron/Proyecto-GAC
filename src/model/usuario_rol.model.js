const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection"); // tu instancia de Sequelize

class UsuarioRolModel extends Model {}

UsuarioRolModel.init(
  {
    id_usuario_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    sequelize,
    tableName: 'usuario_rol',
    timestamps: false // Si la tabla no tiene timestamps (created_at, updated_at)
  }
);

module.exports = UsuarioRolModel;