const facultadRouter =require('express').Router()
const facultadController=require('../controller/facultad.controller')

facultadRouter.get('/allfacultad',facultadController.getAllFacultad)
facultadRouter.post("/addfacultad",facultadController.AddFacultad)


module.exports=facultadRouter