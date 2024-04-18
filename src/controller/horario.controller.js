const Horario = require("../model/horario.model");
const { handleResponse } = require("../utilities/funciones");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllHorario = async (req, res) => {
    try {
        const body = await Horario.findAll({ where: { estado: { [Op.ne]: 4 } } });
        handleResponse(res, 200, body);
    } catch (err) {
        handleResponse(res, 500, err);
    }
};

exports.addHorario = async (req, res) => {
    const data = ({ hora_inicio, hora_final, dia } = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res, Horario, data);
};

exports.updateHorario = async (req, res) => {
    const data = ({ hora_inicio, hora_final, dia } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Horario, data, req.params.id_horario);
};

exports.deleteHorario = async (req, res) => {
    const data = { estado: 4 };

    await handleRegistroGenerico(res, Horario, data, req.params.id_horario);
};
