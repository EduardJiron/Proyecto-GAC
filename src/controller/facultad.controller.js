const { prototype } = require("../model/carrera.model");
const Facultad = require("../model/facultad.model");
const {handleResponse} = require ("../utilities/funciones")
const {Op} = require ("sequelize");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllFacultad = async (req, res) => {
  try {
    const body = await Facultad.findAll({ where: { estado: { [Op.ne]: 4 } } });
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

  exports.AddFacultad = async(req, res) => {

    const data = ({nombre, descripcion} = req.body)
    data["estado"] = 1
    await handleRegistroGenerico (res, Facultad, data)


  }
