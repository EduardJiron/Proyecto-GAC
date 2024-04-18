const calificacionRouter= require('express').Router()
const calificacionController=require('../controller/calificacion.controller')

calificacionRouter.get('/getAllCalificacion',calificacionController.getAllCalificacion)
calificacionRouter.post('/addCalificacion',calificacionController.addCalificacion)
calificacionRouter.put('/updateCalificacion/:id_calificacion',calificacionController.updateCalificacion)
calificacionRouter.delete('/deleteCalificacion/:id_calificacion',calificacionController.deleteCalificacion)

module.exports=calificacionRouter