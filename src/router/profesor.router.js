const profesorRouter =require('express').Router()
const profesorController=require('../controller/profesor.controller')

profesorRouter.get('/getAllprofesor',profesorController.getAllProfesor)
profesorRouter.get('/getprofesorclase',profesorController.getProfesorClase)
profesorRouter.post('/addprofesorclase',profesorController.addProfesorClase)
profesorRouter.delete('/deleteprofesorclase/:id_clase',profesorController.deleteProfesorClase)
profesorRouter.post('/addprofesor',profesorController.addProfesor)
profesorRouter.put('/updateprofesor/:id_profesor',profesorController.UpdateProfesor)
profesorRouter.delete('/deleteprofesor/:id_profesor',profesorController.deleteProfesor)

module.exports = profesorRouter