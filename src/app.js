const express = require("express");
const cors = require("cors");
const facultadRouter = require("./router/facultad.router");
const carreraRouter = require("./router/carrera.router");
const estudianteRouter = require("./router/estudiante.router");
const usuarioRouter = require("./router/usuario.router");
const rolRouter = require("./router/rol.router");
const calificacionRouter = require("./router/calificacion.router");

const claseRouter = require("./router/clase.router");

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
app.use(uri + "calificacion",calificacionRouter);
app.use(uri + "asistencia",asistenciaRouter);
app.use(uri + "clase", claseRouter);


//se define la ruta principal,hasta el momento solo muestra el estado del servidor
app.get("/", (req, res) => {
  res.status(200).send({
    res: 200,
    body: "Server ON",
  });
});

module.exports = app;
