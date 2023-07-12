'use strict'
var mongoose = require('mongoose');
var app = require('./app')
var port = 3300;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Portafolio')
    .then(()=>{
        console.log("conexion a la base de datos establecidad...");

        //Creacion del servidor
        app.listen(port,()=>{
            console.log(`Servidor Corriendo con Exito en localhost ${port} ...`)
        })
    })
    .catch(err=> console.log(err));