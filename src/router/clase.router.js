const claseRouter =require('express').Router()
const claseController=require('../controller/clase.controller')

claseRouter.post('/getallclase/:id_profesor',claseController.getAllClaseByProfesor)
claseRouter.get('/getallclaseE',claseController.getAllClase)
claseRouter.post('/addclase',claseController.addClase)
claseRouter.put('/updateclase/:id_clase',claseController.updateClase)
claseRouter.delete('/deleteclase/:id_clase',claseController.deleteClase)

module.exports = claseRouter