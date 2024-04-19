const usuario_rolRouter =require('express').Router()
const usuario_rolController=require('../controller/usuario_rol.controller')

usuario_rolRouter.get('/getAllUsuario_rol',usuario_rolController.getAllUsuario_rol)
usuario_rolRouter.post('/addUsuario_rol',usuario_rolController.addUsuario_rol)
usuario_rolRouter.put('/UpdateUsuario_rol/:id_usuario_rol',usuario_rolController.UpdateUsuario_rol)
usuario_rolRouter.delete('/deleteUsuario_rol/:id_usuario_rol',usuario_rolController.deleteUsuario_rol)

module.exports = usuario_rolRouter