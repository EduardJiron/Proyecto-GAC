

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection'); 

class ProfesorClase extends Model {}

ProfesorClase.init(
  {
    id_profesor_clase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    
  },
  {
    sequelize,
    modelName: 'Profesor_clase',
    tableName: 'Profesor_clase',
    timestamps: false 
  }
);

module.exports = ProfesorClase;
