const facultadRouter =require('express').Router()
const facultadController=require('../controller/facultad.controller')

facultadRouter.get('/allfacultad',facultadController.getAllFacultad)
facultadRouter.post("/addfacultad",facultadController.addFacultad)
facultadRouter.put('/updateFacultad/:id_facultad',facultadController.updateFacultad)
facultadRouter.delete("/deleteFacultad/:id_facultad",facultadController.deleteFacultad)

module.exports=facultadRouter