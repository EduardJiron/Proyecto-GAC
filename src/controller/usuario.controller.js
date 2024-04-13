const Usuario = require("../model/usuario.model");
const { handleResponse } = require("../utilities/funciones");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllUsuario = async (req, res) => {
  try {
    const body = await Usuario.findAll({ where: { estado: { [Op.ne]: 4 } } });
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

exports.addUsuario = async (req, res) => {
  const data = ({ username, password } = req.body);
  data["estado"] = 1;
  await handleRegistroGenerico(res, Usuario, data);
};

exports.updateUsuario = async (req, res) => {
  const data = ({ username, password } = req.body);

  data["estado"] = 2;

  await handleRegistroGenerico(res, Usuario, data, req.params.id_usuario);
};

exports.deleteUsuario = async (req, res) => {
  const data = { estado: 4 };

  await handleRegistroGenerico(res, Usuario, data, req.params.id_usuario);
};
