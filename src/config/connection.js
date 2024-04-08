
const { Sequelize } = require("sequelize");
const env = require("dotenv").config();
//conexion a sqlsever, ustedes deben cambiar los valores de las variables de entorno en el archivo .env
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME,process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});


//esto se usa para exportar, en este caso se exporta la conexion
module.exports = sequelize;
