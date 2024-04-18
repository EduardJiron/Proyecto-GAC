const evaluacionRouter =require('express').Router()
const evaluacionController=require('../controller/evaluacion.controller')

evaluacionRouter.get('/allEvaluacion',evaluacionController.getAllEvaluacion)
evaluacionRouter.post("/addEvaluacion",evaluacionController.addEvaluacion)
evaluacionRouter.put('/updateEvaluacion/:id_evaluacion',evaluacionController.updateEvaluacion)
evaluacionRouter.delete("/deleteEvaluacion/:id_evaluacion",evaluacionController.deleteEvaluacion)

module.exports=evaluacionRouter