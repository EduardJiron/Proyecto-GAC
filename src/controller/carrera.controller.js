const Carrera = require("../model/carrera.model");

const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

//se obtiene los todos los datos de la carrera 
exports.getAllCarrera = async (req, res) => {
  try {
    //En sequelize se usa [op.ne] para referirse al operador diferente de (!==)
    //se usa el diferente de 4 por que el eliminar cambiara el estado a 4 por ende todo dato con estado 4 no se mostrara en el body
    //por ultimo se usa la funcion findall de sequelize para selecionar los datos
    const body = await Carrera.findAll({ where: { estado: { [Op.ne]: 4 } } });
    //esto es una utidad generica, ve a utilities funciones ahi estara la fuente
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

// se inserta una carrera a la tabla carrera
exports.insertCarrera = async (req, res) => {
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


