const Rol_permiso = require("../model/rol_permiso.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllRol_permiso = async(req, res)=>{
    try {
        const body = await Rol_permiso.findAll();
        handleResponse(res, 200, body);
      } catch (err) {
        handleResponse(res, 500, err);
      }
}; 

    exports.addRol_permiso = async (req, res) => {
    const data = ({  id_permiso, id_rol } = req.body);

    await handleRegistroGenerico(res, Rol_permiso, data);
    };

    exports.UpdateRol_permiso = async (req, res) => {
    const data = ({ id_permiso, id_rol } = req.body);
    
    await handleRegistroGenerico(res, Rol_permiso, data, req.params.id_rol_permiso);
    };

    exports.deleteRol_permiso = async (req, res) => {
     
    await handleRegistroGenerico(res, Rol_permiso, data, req.params.id_rol_permiso);
    };