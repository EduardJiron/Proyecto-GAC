const Profesor = require("../model/profesor.model");
const { handleResponse } = require("../utilities/funciones");
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