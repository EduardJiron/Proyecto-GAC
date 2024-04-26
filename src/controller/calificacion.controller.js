const Calificacion = require("../model/calificacion.model");
const vwCalificaciones = require("../model/vwCalificaciones.model");
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
  exports.getAllvwCalificaciones = async (req, res) => {
    try {
      const body = await vwCalificaciones.findAll();
      handleResponse(res, 200, body);
    } catch (err) {
      handleResponse(res, 500, err);
    }
  }
exports.getCalificacionesByClase = async (req, res) => {
    try {
      const body = await vwCalificaciones.findAll({
        where: { id_clase: req.params.id_clase },
      });
      handleResponse(res, 200, body);
    } catch (err) {
      handleResponse(res, 500, err);
    }
  }
  
  exports.addCalificacion = async (req, res) => {
    const data = ({calificacion,fecha, id_clase,id_profesor,id_estudiante} = req.body);
    data["estado"] = 1;
    data["fecha"] = new Date();
    await handleRegistroGenerico(res,Calificacion, data);
  };
  
  exports.updateCalificacion = async (req, res) => {
    const data = ({calificacion,id_clase,id_profesor,id_estudiante} = req.body);
  
    data["estado"] = 2;
    data["fecha"] = new Date();
  
    await handleRegistroGenerico(res,Calificacion, data, req.params.id_calificacion);
  };
  
  exports.deleteCalificacion= async (req, res) => {
    await Calificacion.destroy({ where: { id_calificacion: req.params.id_calificacion } });
    handleResponse(res, 200, "Registro eliminado");
  };