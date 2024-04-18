const periodo_academicoRouter =require('express').Router()
const periodo_academicoController=require('../controller/pediodo_academico.controller')

periodo_academicoRouter.get('/allperiodo_academico',periodo_academicoController.getAllperiodo_academico)
periodo_academicoRouter.post("/addperiodo_academico",periodo_academicoController.addperiodo_academico)
periodo_academicoRouter.put('/updateperiodo_academico/:periodo_academico',periodo_academicoController.updateperiodo_academico)
periodo_academicoRouter.delete("/deleteperiodo_academico/:periodo_academico",periodo_academicoController.deleteperiodo_academico)

module.exports=periodo_academicoRouter