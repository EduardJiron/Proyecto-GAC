const usuarioRouter =require('express').Router()
const usuarioController=require('../controller/usuario.controller')

usuarioRouter.get('/getallUsuario',usuarioController.getAllUsuario)
usuarioRouter.post('/addUsuario',usuarioController.addUsuario)
usuarioRouter.put('/updateUsuario/:id_usuario',usuarioController.updateUsuario)
usuarioRouter.delete('/deleteUsuario/:id_usuario',usuarioController.deleteUsuario)


module.exports=usuarioRouter