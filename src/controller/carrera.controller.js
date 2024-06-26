const Carrera = require("../model/carrera.model");
const vwCarrera =require('../model/vwCarrera.model')
const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

//se obtiene los todos los datos de la carrera
exports.getAllCarrera = async (req, res) => {
  try {
   
    const body = await vwCarrera.findAll({where:{estado:{[Op.ne]:4}}});
   
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};
exports.getAllCarreraId = async (req, res) => {
  try {
    
    const body = await Carrera.findAll();
   
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

// se inserta una carrera a la tabla carrera
exports.addCarrera = async (req, res) => {
  //se extraen los valores del cuerpo de la solicitud (son los valores enviados por el cliente atraves del metodo post )
  const data = ({ nombre, descripcion, id_facultad } = req.body);
  //El estado se inserta al objeto data despues de la respuestas del cliente
  data["estado"] = 1;
  // se llama al registro generico, este se ubica en base.controller ahi voy a explicar el funcionamiento
  //los parametros de handleRegistroGenerico son : El response,el modelo y el id a modificar o eliminar
  await handleRegistroGenerico(res, Carrera, data);
};
//se actualizan los registro de la tabla Carrera
exports.updateCarrera = async (req, res) => {
  //similar al insertar
  const data = ({ nombre, descripcion, id_facultad } = req.body);
  //el estado ahora es 2 por insertar
  data["estado"] = 2;
  //Se pasa el id del elemento a modificar, para esto se usa el parametro de la url de la solicitud
  //los parametros de handleRegistroGenerico son : El response,el modelo y el id a modificar o eliminar
  await handleRegistroGenerico(res, Carrera, data, req.params.id_carrera);
};
exports.deleteCarrera = async (req, res) => {
  
  const data = ({estado:4} );
  await handleRegistroGenerico(res, Carrera, data, req.params.id_carrera);
};

