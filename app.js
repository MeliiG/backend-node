'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cors

//rutas

app.get('/',(req,res)=>{
    res.status(200).send(
       "<h1>Pagina de inicio del servidor 💻</h1>"
    )
})

app.get('/test',(req,res)=>{
    res.status(200).send({
        mensaje: "Probando RUTA"
    })
})
//exportar
module.exports = app;