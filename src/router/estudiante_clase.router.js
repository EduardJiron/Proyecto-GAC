const estudiante_claseRouter =require('express').Router()
const estudiante_claseController=require('../controller/estudiante_clase.controller')

estudiante_claseRouter.get('/getAllEstudiante_clase',estudiante_claseController.getAllEstudiante_clase)
estudiante_claseRouter.post('/addEstudiante_clase',estudiante_claseController.addEstudiante_clase)
estudiante_claseRouter.put('/UpdateEstudiante_clase/:id_estudiante_clase',estudiante_claseController.UpdateEstudiante_clase)
estudiante_claseRouter.delete('/deleteEstudiante_clase/:id_estudiante_clase',estudiante_claseController.deleteEstudiante_clase)

module.exports = estudiante_claseRouter