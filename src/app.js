const express = require("express");
const cors = require("cors");
const facultadRouter = require("./router/facultad.router");
const carreraRouter = require("./router/carrera.router");
const estudianteRouter = require("./router/estudiante.router");
const usuarioRouter = require("./router/usuario.router");
const rolRouter = require("./router/rol.router");
const profesorRouter = require("./router/profesor.router");
const horarioRouter =require("./router/horario.router");
const evaluacionRouter = require("./router/evaluacion.router");
const calificacionRouter = require("./router/calificacion.router");
const claseRouter = require("./router/clase.router");
const asisteciaRouter = require("./router/asistencia.router");
const rol_permisoRouter = require("./router/rol_permiso.router");
const profesor_claseRouter = require("./router/profesor_clase.router");
const usuario_rolRouter = require("./router/usuario_rol.router");
const estudiante_claseRouter = require("./router/estudiante_clase.router");


const app = express();

app.use(express.json());
app.use(cors());
const uri = "/api/v1/";

//se definen los enrutadores, aqui se deben ir agregando los router creados

app.use(uri + "facultad", facultadRouter);
app.use(uri + "carrera", carreraRouter);
app.use(uri + "estudiante", estudianteRouter);
app.use(uri + "usuario", usuarioRouter);
app.use(uri + "rol", rolRouter);
app.use(uri + "profesor",profesorRouter);
app.use(uri + "horario", horarioRouter)
app.use(uri + "evaluacion", evaluacionRouter)
app.use(uri + "calificacion",calificacionRouter);
app.use(uri + "asistencia",asisteciaRouter);
app.use(uri + "clase", claseRouter);
app.use(uri + "rolPermiso",rol_permisoRouter);
app.use(uri +"profesorClase",profesor_claseRouter);
app.use(uri + "usuarioRol",usuario_rolRouter)
app.use(uri + "estudianteClase",estudiante_claseRouter)
//se define la ruta principal,hasta el momento solo muestra el estado del servidor
app.get("/", (req, res) => {
  res.status(200).send({
    res: 200,
    body: "Server ON",
  });
});

module.exports = app;
