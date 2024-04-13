const { Model, DataTypes } = require("sequelize");
//conexion
const sequelize=require('../config/connection')


class UsuarioModel extends Model {}

UsuarioModel.init(
    {
      
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }

    },
    {
      //se llama a la conexion
      sequelize,
      //debe llamarse igual a la tabla sql server
      tableName: "Usuario",
      //se suprimen los campos de tiempo de creacion y edicion
      timestamps:false
    }
  );
  
  // se exporta el modelo
  module.exports= UsuarioModel