'use strict'

var controller = {
    home: function(req,res) {
      return res.status(200).send({
        message : 'La home'
      });
    },
    test: function(req,res){
      return res.status(200).send({
        message: 'accion del controlador'
      })
    }
};

module.exports = controller;