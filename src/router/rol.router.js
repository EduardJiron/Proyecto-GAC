const rolRouter = require("express").Router();
const rolController = require("../controller/rol.controller");

rolRouter.get("/getallrol", rolController.getAllRol);
rolRouter.post("/addrol", rolController.addRol);
rolRouter.put("/updaterol/:id_Rol", rolController.updateRol);
rolRouter.delete("/deleterol/:id_Rol", rolController.deleteRol);

module.exports = rolRouter;
