const { Model, DataTypes } = require("sequelize");
//conexion
const sequelize=require('../config/connection')


// se crea una clase de tipo modelo
class CarreraModel extends Model {}



CarreraModel.init(
  {
    //se ingresa los campos tal cual como estan en sqlserver
    id_carrera: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      //indica si es posible usar null, en ese caso no se puede usar null
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
    id_facultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    //se llama a la conexion
    sequelize,
    //debe llamarse igual a la tabla sql server
    tableName: "carrera",
    //se suprimen los campos de tiempo de creacion y edicion
    timestamps:false
  }
);

// se exporta el modelo
module.exports=CarreraModel