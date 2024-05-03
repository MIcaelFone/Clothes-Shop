const {getUsuario,addUsuario,updateUsuario,deleteUsuario} =require("../controllers/usuario");
const express = require('express');
const router= express.Router();  

router.get("/listarusuarios",getUsuario);
router.post("/cadastrarusuario",addUsuario)
router.delete("/deletarusuario/:id",deleteUsuario)
router.put("/atualizarusuario/:id",updateUsuario)

module.exports=router;