const Rol = require("../model/rol.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllRol = async (req, res) => {
  try {
    const body = await Rol.findAll({ where: { estado: { [Op.ne]: 4 } } });

    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

exports.addRol = async (req, res) => {
  const data = ({ nombre, descripcion } = req.body);

  data["estado"] = 1;

  await handleRegistroGenerico(res, Rol, data);
};

exports.updateRol = async (req, res) => {
  const data = ({ nombre, descripcion } = req.body);

  data["estado"] = 2;

  await handleRegistroGenerico(res, Rol, data, req.params.id_Rol);
};

exports.deleteRol = async (req, res) => {
  const data = { estado: 4 };
  await handleRegistroGenerico(res, Rol, data, req.params.id_Rol);
};
