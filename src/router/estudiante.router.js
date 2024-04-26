const estudianteRouter =require('express').Router()
const estudianteController=require('../controller/estudiante.controller')

estudianteRouter.get('/getallestudiante',estudianteController.getAllEstudiante)
estudianteRouter.get('/getestudiante',estudianteController.getEstudiante)
estudianteRouter.post('/addinscripcion',estudianteController.addIscripcion)
estudianteRouter.post('/updateinscripcion/:id_inscripcion',estudianteController.updateInscripcion)
estudianteRouter.delete('/deleteinscripcion/:id_inscripcion',estudianteController.deleteInscripcion)
estudianteRouter.get('/getEstudianteByclase/:id_clase',estudianteController.getEstudianteByclase)
estudianteRouter.get('/isInscrito/',estudianteController.isInscrito)
estudianteRouter.post('/addestudianteinscripcion',estudianteController.addEstudianteInscripcion)
estudianteRouter.post('/addestudiante',estudianteController.addEstudiante)
estudianteRouter.put('/updateestudiante/:id_estudiante',estudianteController.updateEstudiante)
estudianteRouter.delete('/deleteestudiante/:id_estudiante',estudianteController.deleteEstudiante)

module.exports = estudianteRouter