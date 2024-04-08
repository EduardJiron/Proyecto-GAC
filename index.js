const app =require('./src/app')
const port= process.env.PORT
// ojo deben descargar las siguientes dependencias 
// para descargar las dependencias deben tener node.js y poner npm i nombreDependencia en la terminal en la carpeta raiz de la solucion
/*"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "env": "^0.0.2",
    "express": "^4.19.2",
    "nodemon": "^3.1.0",
    "sequelize": "^6.37.2",
    "tedious": "^18.1.0"
  }
*/

// aqui no tocar nada, es el metodo estatico de la aplicacion 
//todo esta documentado para la creacion de los cruds no se pueden perder

app.listen(port,()=>{
    console.log('escuchando al puerto',port)
})
