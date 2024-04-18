const Clase = require("../model/clase.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllClase = async (req, res) => {
    try{
        const body = await Clase.findAll({ where: { estado: { [Op.ne]: 4 } } });
        handleResponse(res, 200, body);
    }catch (err) {
        handleResponse(res, 500, err);
    }
};

exports.addClase = async (req, res) => {
    const data = ({ nombre, descripcion, cod_clase, id_horario, periodo_academico } = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res, Clase, data);
};

exports.updateClase = async (req, res) => {
    const data = ({ nombre, descripcion, cod_clase, id_horario, periodo_academico } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Clase, data, req.params.id_clase);
};

exports.deleteClase = async (req, res) => {
    const data = { estado: 4 }
    await handleRegistroGenerico(res, Clase, data, req.params.id_clase);
};