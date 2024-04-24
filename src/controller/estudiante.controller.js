const Estudiante = require("../model/estudiante.model");
const VwEstudianteClase = require("../model/vwClaseEstudiante.model");
const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");

exports.getAllEstudiante = async (req, res) => {
  try {
    const body = await Estudiante.findAll({
      where: { estado: { [Op.ne]: 4 } },
    });
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
};

exports.getEstudianteByclase = async (req, res) => {
const id_clase = req.params.id_clase;
try{
  const body = await VwEstudianteClase.findAll(
    {where:{id_clase:id_clase}}
  )
  handleResponse(res,200,body)

}
catch(err){
  handleResponse(res,500,err)
}

}

exports.addEstudiante = async (req, res) => {
  const data = ({
    id_institucional,
    nombre,
    apellido,
    cedula,
    correo_intitucional,
    fecha_nacimiento,
    genero,
    direccion,
    id_carrera,
    id_usuario,
  } = req.body);
  data["estado"] = 1;
  await handleRegistroGenerico(res, Estudiante, data);
};

exports.updateEstudiante = async (req, res) => {
  const data = ({
    id_institucional,
    nombre,
    apellido,
    cedula,
    correo_intitucional,
    fecha_nacimiento,
    genero,
    direccion,
    id_carrera,
    id_usuario,
  } = req.body);
  data["estado"] = 2;
  await handleRegistroGenerico(res, Estudiante, data, req.params.id_estudiante);
};

exports.deleteEstudiante = async (req, res) => {
  const data = { estado: 4 };
  await handleRegistroGenerico(res, Estudiante, data, req.params.id_estudiante);
};
