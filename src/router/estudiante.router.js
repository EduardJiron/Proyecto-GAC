const estudianteRouter =require('express').Router()
const estudianteController=require('../controller/estudiante.controller')

estudianteRouter.get('/getallestudiante',estudianteController.getAllEstudiante)
estudianteRouter.get('/getEstudianteByclase/:id_clase',estudianteController.getEstudianteByclase)
estudianteRouter.post('/addestudiante',estudianteController.addEstudiante)
estudianteRouter.put('/updateestudiante/:id_estudiante',estudianteController.updateEstudiante)
estudianteRouter.delete('/deleteestudiante/:id_estudiante',estudianteController.deleteEstudiante)

module.exports = estudianteRouter