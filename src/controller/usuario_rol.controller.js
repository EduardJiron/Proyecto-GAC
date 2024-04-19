const Usuario_Rol = require("../model/usuario_rol.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllUsuario_rol = async(req, res)=>{
    try {
        const body = await Usuario_Rol.findAll();
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}; 

    exports.addUsuario_rol = async (req, res) => {
    const data = ({  id_rol, id_usuario } = req.body);
    await handleRegistroGenerico(res, Usuario_Rol, data);
    };


    exports.UpdateUsuario_rol = async (req, res) => {
    const data = ({  id_rol,id_usuario } = req.body);
    await handleRegistroGenerico(res, Usuario_Rol, data, req.params.id_usuario_rol);
    };


    exports.deleteUsuario_rol = async (req, res) => {
    await handleRegistroGenerico(res, Usuario_Rol, data, req.params.id_usuario_rol);
    };