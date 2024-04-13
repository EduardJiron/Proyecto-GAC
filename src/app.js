const express=require('express')
const cors =require('cors')
const facultadRouter=require('./router/facultad.router')
const carreraRouter=require('./router/carrera.router')
const estudianteRouter=require('./router/estudiante.router')
const app=express()

app.use(express.json())
app.use(cors())
const uri= '/api/v1/'

//se definen los enrutadores, aqui se deben ir agregando los router creados
app.use(uri,facultadRouter,carreraRouter)
app.use('/api/v1/estudiante', estudianteRouter)


//se define la ruta principal,hasta el momento solo muestra el estado del servidor
app.get('/',(req,res)=>{
    res.status(200).send({
        res:200,
        body:"Server ON"
    })
})

module.exports= app