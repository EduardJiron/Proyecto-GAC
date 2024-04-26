const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CalificacionModel extends Model{}

CalificacionModel.init({
    id_calificacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    
      calificacion:{
        type: DataTypes.DECIMAL,
        allowNull: false,
      },

      fecha:{
        type:DataTypes.DATE,
        allowNull:false,
      },
      id_clase:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },
      id_estudiante:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
      ,id_periodo:{
        type:DataTypes.INTEGER,
        allowNull:false
      }
      



},{
    sequelize,
    tableName: "calificicacion",
    timestamps: false,
})

module.exports = CalificacionModel;