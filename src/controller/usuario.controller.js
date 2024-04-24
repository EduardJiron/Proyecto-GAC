const Usuario = require("../model/usuario.model");
const { handleResponse } = require("../utilities/funciones");
const { Op } = require("sequelize");
const { handleRegistroGenerico } = require("./base.controller");
const jwt = require("jsonwebtoken");
const Profesor = require("../model/profesor.model");

exports.getAllUsuario = async (req, res) => {
  try {
    const body = await Usuario.findAll({ where: { estado: { [Op.ne]: 4 } } });
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
   
    const user = await Usuario.findOne({
      where: { username, password, estado: { [Op.ne]: 4 } },
    });
    if (user) {
    
      const token = jwt.sign({ id: user.id }, 'ElMeroMiniPeKka', {
        expiresIn: '1d', 
      });
   
      const profesor = await Profesor.findOne({ where: { id_usuario: user.id_usuario } });
      
      req.session.token = token;
      
      console.log(token);
      req.session.profesor = profesor.id_profesor;
     console.log(profesor.id_profesor);

      res.status(200).json({ token , profesor});
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error interno del servidor" });
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
