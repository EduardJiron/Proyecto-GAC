const Calificacion = require("../model/calificacion.model");
const { handleResponse } = require("../utilities/funciones");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllCalificacion = async (req, res) => {
    try {
      const body = await Calificacion.findAll({
     where: { estado: { [Op.ne]: 4 } } });
      handleResponse(res, 200, body);
    } catch (err) {
      handleResponse(res, 500, err);
    }
  };
  
  exports.addCalificacion = async (req, res) => {
    const data = ({calificacion,fecha,resultado, id_clase,id_profesor,id_estudiante} = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res,Calificacion, data);
  };
  
  exports.updateCalificacion = async (req, res) => {
    const data = ({calificacion,fecha,resultado,id_clase,id_profesor,id_estudiante} = req.body);
  
    data["estado"] = 2;
  
    await handleRegistroGenerico(res,Calificacion, data, req.params.id_calificacion);
  };
  
  exports.deleteCalificacion= async (req, res) => {
    const data = { estado: 4 };
  
    await handleRegistroGenerico(res,Calificacion,data, req.params.id_calificacion);
  };