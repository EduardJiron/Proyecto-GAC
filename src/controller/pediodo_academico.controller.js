const periodo_academico = require("../model/periodo_academico.model");
const { handleResponse } = require("../utilities/funciones");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllperiodo_academico = async (req, res) => {
  try {
    const body = await periodo_academico.findAll({ where: { estado: { [Op.ne]: 4 } } });
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

exports.addperiodo_academico = async (req, res) => {
  const data = ({ nombre, fecha_inicio, fecha_final } = req.body);
  data["estado"] = 1;
  await handleRegistroGenerico(res, periodo_academico, data);
};

exports.updateperiodo_academico = async (req, res) => {
  const data = ({ nombre, fecha_inicio, fecha_final } = req.body);
  data["estado"] = 2;
  await handleRegistroGenerico(res, periodo_academico, data, req.params.periodo_academico);
};

exports.deleteperiodo_academico = async (req, res) => {
  const data = { estado: 4 };

  await handleRegistroGenerico(res, periodo_academico, data, req.params.periodo_academico);
};