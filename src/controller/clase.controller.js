
const { Clase, Profesor_clase, Profesor } = require('../model/profesor_clase');
const { Op } = require("sequelize");
const { handleResponse } = require("../utilities/funciones");
const { handleRegistroGenerico } = require("./base.controller");
exports.getAllClaseByProfesor = async (req, res) => {

    const idProfesor = req.session.profesor; 
    try {
        const clases = await Clase.findAll({
            where: { 
                estado: { [Op.ne]: 4 }, 
            },
            include: [{
                model: Profesor,
                as: 'Profesores',
                where: {
                    id_profesor: idProfesor
                },
                through: {
                    model: Profesor_clase,
                    as: 'Profesor_clase'
                },
                attributes: [] 
            }]
        });

        handleResponse(res, 200, clases);
    } catch (err) {
        console.error("Error en la consulta Sequelize:", err);
        handleResponse(res, 500, { error: "Error en la consulta Sequelize", details: err });
    }
};

exports.addClase = async (req, res) => {
    const data = ({ nombre, descripcion, cod_clase, id_horario, periodo_academico } = req.body);
    data["estado"] = 1;
    await handleRegistroGenerico(res, Clase, data);
};

exports.updateClase = async (req, res) => {
    const data = ({ nombre, descripcion, cod_clase, id_horario, periodo_academico } = req.body);
    data["estado"] = 2;
    await handleRegistroGenerico(res, Clase, data, req.params.id_clase);
};

exports.deleteClase = async (req, res) => {
    const data = { estado: 4 }
    await handleRegistroGenerico(res, Clase, data, req.params.id_clase);
};