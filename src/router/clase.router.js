const claseRouter =require('express').Router()
const claseController=require('../controller/clase.controller')

claseRouter.get('/getallclase',claseController.getAllClaseByProfesor)
claseRouter.post('/addclase',claseController.addClase)
claseRouter.put('/updateclase/:id_clase',claseController.updateClase)
claseRouter.delete('/deleteclase/:id_clase',claseController.deleteClase)

module.exports = claseRouter