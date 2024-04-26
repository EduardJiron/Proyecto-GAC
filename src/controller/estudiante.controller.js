const Estudiante = require("../model/estudiante.model");
const VwEstudianteClase = require("../model/vwClaseEstudiante.model");
const Inscripcion = require("../model/inscripcion.model");
const vwIncripcion = require("../model/vwInscripcion");
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
exports.isInscrito = async (req, res) => {
  try {
    const { id_estudiante, id_clase } = req.query;
    const inscripcion = await Inscripcion.findOne({
      where: {
        id_estudiante: id_estudiante,
        id_clase: id_clase
      }
    });

    
    if (inscripcion) {
      return res.json({ inscrito: true });
    } else {
      return res.json({ inscrito: false });
    }
  } catch (error) {
    console.error('Error al validar inscripción:', error);
    return res.status(500).json({ error: 'Error al validar inscripción. Por favor, inténtalo de nuevo.' });
  }
};

exports.addIscripcion = async (req, res) => {
  const { id_estudiante, id_clase, id_periodo } = req.body;
  try {
    const data = {id_clase, id_estudiante, id_periodo};
    data["fecha_inscripcion"] = new Date();
    data["estado"] = 1;
    await handleRegistroGenerico(res, Inscripcion, data);
   

  }
  catch(err){
    handleResponse(res,500,err)
  }
}

exports.updateInscripcion = async (req, res) => {
  const data = {id_clase, id_estudiante, id_periodo};
  data["fecha_inscripcion"] = new Date();
  data["estado"] = 1;

  await handleRegistroGenerico(res, Inscripcion, data, req.params.id_inscripcion);
}

exports.deleteInscripcion = async (req, res) => {
  await Inscripcion.destroy({where:{id_inscripcion:req.params.id_inscripcion}})

  handleResponse(res,200,'Registro eliminado')
}



exports.getEstudiante = async (req, res) => {
  try {
    const body = await vwIncripcion.findAll({
      where: { estado: { [Op.ne]: 4 } },
    });
    handleResponse(res, 200, body);
  } catch (err) {
    handleResponse(res, 500, err);
  }
}

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

exports.addEstudianteInscripcion = async (req, res) => {
  const data = ({ id_estudiante, id_clase,estado,id_periodo} = req.body);
  data["fecha_inscripcion"] = new Date();
  await handleRegistroGenerico(res, Inscripcion, data);
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
