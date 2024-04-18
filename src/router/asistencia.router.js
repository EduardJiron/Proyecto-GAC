const asistenciaRouter =require('express').Router()
const asistenciaController=require('../controller/asistencia.controller')

asistenciaRouter.get('/getallasistencia',asistenciaController.getAllAsistencia)
asistenciaRouter.post('/addasistencia',asistenciaController.addAsistencia)
asistenciaRouter.put('/updateasistencia/:id_asistencia',asistenciaController.updateAsistencia)
asistenciaRouter.delete('/deleteasistencia/:id_asistencia',asistenciaController.deleteAsistencia)

module.exports = asistenciaRouter