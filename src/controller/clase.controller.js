
const { Clase, Profesor_clase, Profesor } = require('../model/profesor_clase');
const vwClase = require('../model/vwClase.model');
const VwClaseProfesor = require('../model/vwClaseProfesor.model');
const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllClaseByProfesor = async (req, res) => {
    const idProfesor = req.params.id_profesor;
    try {
        const body = await VwClaseProfesor.findAll({
            where: { id_profesor: idProfesor}
        });
        handleResponse(res, 200, body);
    } catch (err) {
        handleResponse(res, 500, err);
    }

};
exports.getAllClase = async (req, res) => {
    try {
        const body = await vwClase.findAll(
            { where: { estado: { [Op.ne]: 4 } } }
        );
        handleResponse(res, 200, body);
    } catch (err) {
        handleResponse(res, 500, err);
    }
};

exports.addClase = async (req, res) => {
    const data = ({ nombre, descripcion, cod_clase, id_periodo,id_carrera } = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res, Clase, data);
};

exports.updateClase = async (req, res) => {
    const data = ({  nombre, descripcion, cod_clase, id_periodo,id_carrera  } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Clase, data, req.params.id_clase);
};

exports.deleteClase = async (req, res) => {
    const data = { estado: 4 }
    await handleRegistroGenerico(res, Clase, data, req.params.id_clase);
};