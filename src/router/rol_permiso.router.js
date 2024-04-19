const rol_permisoRouter =require('express').Router()
const rol_permisoController=require('../controller/rol_permiso.controller')

rol_permisoRouter.get('/getAllRol_permiso',rol_permisoController.getAllRol_permiso)
rol_permisoRouter.post('/addRol_permiso',rol_permisoController.addRol_permiso)
rol_permisoRouter.put('/UpdateRol_permiso/:id_rol_permiso',rol_permisoController.UpdateRol_permiso)
rol_permisoRouter.delete('/deleteRol_permiso/:id_rol_permiso',rol_permisoController.deleteRol_permiso)

module.exports = rol_permisoRouter