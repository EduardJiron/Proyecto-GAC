const Profesor = require("../model/profesor.model");
const { handleResponse } = require("../utilities/funciones");
const Profesor_clase = require("../model/profesor_clase.model");
const vwProfesorClaseModel = require("../model/vwProfesorClase.model");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllProfesor = async (req, res) => {

    try {
        const body = await Profesor.findAll({ where: { estado: { [Op.ne]: 4 } } });
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}

exports.getProfesorClase = async (req, res) => {
    try {
        const body = await vwProfesorClaseModel.findAll();
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}
exports.addProfesorClase = async (req, res) => {
    try {
        const body = await Profesor_clase.create(req.body);
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}

exports.deleteProfesorClase = async (req, res) => {
    try {
        const body = await Profesor_clase.destroy({
            where: { id_profesor_clase: req.params.id_clase },
          });
        handleResponse(res, 200, 'Registro eliminado');
      } catch (err) {
        handleResponse(res, 500, err);
      }
}




exports.addProfesor = async (req, res)=> {
    const data = ({ 
        id_institucional, 
        nombre,
        apellido,
        cedula, 
        correo_intitucional,
        fecha_nacimiento,
        genero,
        direccion,
        id_usuario
     } = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res, Profesor, data);
}

exports.UpdateProfesor = async (req, res)=> {
    const data = ({ 
        id_institucional, 
        nombre,
        apellido,
        cedula, 
        correo_intitucional,
        fecha_nacimiento,
        genero,
        direccion,
        id_usuario
     } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Profesor, data,req.params.id_profesor);
}

exports.deleteProfesor = async (req, res) => {
    const data = { estado: 4 };
    await handleRegistroGenerico(res, Profesor, data,req.params.id_profesor);
}