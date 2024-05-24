const {getUsuario,addUsuario,updateUsuario,deleteUsuario,logandoUsuario,verificandoCadastro} =require("../controllers/usuario");
const express = require('express');
const router= express.Router();  
const middlaware_authentication =require("../middleware/middleware")
router.get("/listarusuarios",middlaware_authentication,getUsuario);
router.post("/cadastrarusuario",addUsuario)
router.delete("/deletarusuario/:id",middlaware_authentication,deleteUsuario)
router.put("/atualizarusuario/:id",middlaware_authentication,updateUsuario)
router.post("/Login",logandoUsuario)
router.post("/verficandoCadastro",verificandoCadastro)
module.exports=router;