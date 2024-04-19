const profesor_claseRouter =require('express').Router()
const profesor_claseController=require('../controller/profesor_clase.controller')

profesor_claseRouter.get('/getAllProfesor_clase',profesor_claseController.getAllProfesor_clase)
profesor_claseRouter.post('/addProfesor_clase',profesor_claseController.addProfesor_clase)
profesor_claseRouter.put('/UpdateProfesor_clase/:id_profesor_clase',profesor_claseController.UpdateProfesor_clase)
profesor_claseRouter.delete('/deleteProfersor_clase/:id_profesor_clase',profesor_claseController.deleteProfersor_clase)

module.exports = profesor_claseRouter