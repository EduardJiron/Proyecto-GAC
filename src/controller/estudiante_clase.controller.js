const Estudiante_clase = require("../model/estudiante_clase.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllEstudiante_clase = async(req, res)=>{
    try {
        const body = await Estudiante_clase.findAll();
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}; 

    exports.addEstudiante_clase = async (req, res) => {
    const data = ({  id_clase, id_profesor } = req.body);
    await handleRegistroGenerico(res, Estudiante_clase, data);
    };

    exports.UpdateEstudiante_clase = async (req, res) => {
      const data = ({ id_clase, id_profesor } = req.body);
    
      await handleRegistroGenerico(res,Estudiante_clase, data, req.params.id_estudiante_clase);
    };

    exports.deleteEstudiante_clase = async (req, res) => {
    await handleRegistroGenerico(res, Estudiante_clase, data, req.params.id_estudiante_clase);
    };