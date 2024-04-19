const Profesor_clase = require("../model/profesor_clase.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllProfesor_clase = async(req, res)=>{
    try {
        const body = await Profesor_clase.findAll();
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}; 

    exports.addProfesor_clase = async (req, res) => {
    const data = ({  id_clase, id_profesor } = req.body);
    await handleRegistroGenerico(res, Profesor_clase, data);
    };

    exports.UpdateProfesor_clase = async (req, res) => {
      const data = ({ id_clase, id_profesor } = req.body);
    
      await handleRegistroGenerico(res,Profesor_clase, data, req.params.id_profesor_clase);
    };

    exports.deleteProfersor_clase = async (req, res) => {
    await handleRegistroGenerico(res, Profesor_clase, data, req.params.id_profesor_clase);
    };