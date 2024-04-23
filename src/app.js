const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const facultadRouter = require("./router/facultad.router");
const carreraRouter = require("./router/carrera.router");
const estudianteRouter = require("./router/estudiante.router");
const usuarioRouter = require("./router/usuario.router");
const usuarioController = require("./controller/usuario.controller");
const rolRouter = require("./router/rol.router");
const profesorRouter = require("./router/profesor.router");
const horarioRouter =require("./router/horario.router");
const evaluacionRouter = require("./router/evaluacion.router");
const calificacionRouter = require("./router/calificacion.router");
const claseRouter = require("./router/clase.router");
const asistenciaRouter=require('./router/asistencia.router')
const periodoAcademicoRouter =require('./router/periodo_academico.router')
const authenticateToken = require("./config/authMiddleware"); 


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: 'ElMeroMiniPeKka', 
    resave: false,
    saveUninitialized: false,
    ccookie: { secure: false } 
}));

const uri = "/api/v1/";

app.post(uri + "login", usuarioController.login);

app.post(uri + "logout", (req, res) => {

  delete req.session.token;
  delete req.session.profesor;
  res.status(200).json({ message: "Sesión cerrada exitosamente" });
});

//se definen los enrutadores, aqui se deben ir agregando los router creados

app.use(uri + "facultad",authenticateToken ,facultadRouter);
app.use(uri + "carrera",authenticateToken ,carreraRouter);
app.use(uri + "estudiante",authenticateToken, estudianteRouter);
app.use(uri + "usuario", authenticateToken,usuarioRouter);
app.use(uri + "rol",authenticateToken, rolRouter);
app.use(uri + "profesor",authenticateToken,profesorRouter);
app.use(uri + "horario",authenticateToken, horarioRouter)
app.use(uri + "evaluacion",authenticateToken, evaluacionRouter)
app.use(uri + "calificacion",authenticateToken,calificacionRouter);
app.use(uri + "asistencia",authenticateToken,asistenciaRouter);
app.use(uri + "clase",authenticateToken, claseRouter);
app.use(uri+'periodo_academico',authenticateToken,periodoAcademicoRouter)



app.get("/", (req, res) => {
  res.status(200).send({
    res: 200,
    body: "Server ON",
  });
});

module.exports = app;
