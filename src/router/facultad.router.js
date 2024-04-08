const facultadRouter =require('express').Router()
const facultadController=require('../controller/facultad.controller')

facultadRouter.get('/allfacultad',facultadController.getAllFacultad)


module.exports=facultadRouter