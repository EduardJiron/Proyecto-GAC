const { Model, DataTypes } = require("sequelize");
//conexion
const sequelize = require("../config/connection");


class ProfesorModel extends Model {}

ProfesorModel.init({

    id_profesor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_institucional: {
        type: DataTypes.STRING,
         allowNull: false,
      },
      nombre :{
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido :{
        type: DataTypes.STRING,
        allowNull: false,
      },
      cedula : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo_intitucional :{
        type: DataTypes.STRING,
        allowNull:false,
      }, 
      fecha_nacimiento:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      genero:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
       direccion:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }

},
{
    //Llamar a la conexión.
    sequelize,
    modelName: 'Profesor',
    tableName: "Profesor",
    timestamps: false,
  }
  

);  


module.exports = ProfesorModel