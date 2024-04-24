const Asistencia = require("../model/asistencia.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllAsistencia = async (req, res) => {
    try{
        const body = await Asistencia.findAll({ where: { estado: { [Op.ne]: 4 } } });
        handleResponse(res, 200, body);
    }catch (err) {
        handleResponse(res, 500, err);
    }
};

exports.addAsistencia = async (req, res) => {
    const data = ({ asistencia, justificacion, comentario, id_clase, id_estudiante, id_profesor } = req.body);
    data['fecha']=new Date();
    data["estado"] = 1;
    await handleRegistroGenerico(res, Asistencia, data);
};

exports.updateAsistencia = async (req, res) => {
    const data = ({ fecha, asistencia, justificacion, comentario, id_clase, id_estudiante, id_profesor } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Asistencia, data, req.params.id_asistencia);
};

exports.deleteAsistencia = async (req, res) => {
    const data = { estado: 4 }
    await handleRegistroGenerico(res, Asistencia, data, req.params.id_asistencia);
};