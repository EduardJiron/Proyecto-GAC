//se crea una instancia de express router
const carreraRouter =require('express').Router()
//se llama al controlador
const carreraController=require('../controller/carrera.controller')

// la uri completa del recurso seria (http:localhost:3001/api/v1/getallcarrera)
carreraRouter.get('/getallcarrera',carreraController.getAllCarrera)
carreraRouter.post('/insertCarrera',carreraController.insertCarrera)
carreraRouter.put('/updateCarrera/:id_carrera',carreraController.updateCarrera)

// cada instancia express router debe tener, un verbo, una rutay la logica a ejecutar al llamar a la api
// verbos HTTPS
//get se usa para consultar un recurso, en este caso las carreras
//post se usa para crear recursos nuevos 
//put se usa para modificar recursos existentents
//delete se usa para eliminar recursos individuales , catalogos completos

//estos verbos son convenciones no funciones, no por poner delete se pueda borrar algo

//recuerden descargar Thunder client para provar las apis, es una extension del visual studio


module.exports=carreraRouter

