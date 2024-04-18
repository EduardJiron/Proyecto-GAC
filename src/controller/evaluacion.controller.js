const Evaluacion = require("../model/evaluacion.model");
const { handleResponse } = require("../utilities/funciones");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllEvaluacion = async (req, res) => {
    try {
        const body = await Evaluacion.findAll({ where: { estado: { [Op.ne]: 4 } } });
        handleResponse(res, 200, body);
    } catch (err) {
        handleResponse(res, 500, err);
    }
};

exports.addEvaluacion = async (req, res) => {
    const data = ({fecha, calificacion, id_clase, id_profesor, id_estudiante } = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res, Evaluacion, data);
};

exports.updateEvaluacion = async (req, res) => {
    const data = ({fecha, calificacion, id_clase, id_profesor, id_estudiante } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Evaluacion, data, req.params.id_evaluacion);
};

exports.deleteEvaluacion = async (req, res) => {
    const data = { estado: 4 };

    await handleRegistroGenerico(res, Evaluacion, data, req.params.id_evaluacion);
};
