const horarioRouter =require('express').Router()
const horarioController=require('../controller/horario.controller')

horarioRouter.get('/allHorario',horarioController.getAllHorario)
horarioRouter.post("/addHorario",horarioController.addHorario)
horarioRouter.put('/updateHorario/:id_horario',horarioController.updateHorario)
horarioRouter.delete("/deleteHorario/:id_horario",horarioController.deleteHorario)

module.exports=horarioRouter