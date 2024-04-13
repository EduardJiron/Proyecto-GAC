

//esta es una funcion generica para las respuestas
exports.handleResponse=(res,status,body)=>{

  if(body.length!==0){
    res.status(status).send({
        status:status,
        body:body
    })
  }
  else{
    res.status(status).send({
        status:status,
        body:'No encontrado'
    })
  
  }
}