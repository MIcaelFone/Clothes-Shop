const {getUsuario,addUsuario,updateUsuario,deleteUsuario,logandoUsuario,verificandoCadastro,buscandousuario} =require("../controllers/usuario");
const express = require('express');
const router= express.Router();  
router.get("/listarusuarios",getUsuario);
router.post("/cadastrarusuario",addUsuario)
router.delete("/deletarusuario",deleteUsuario)
router.put("/atualizarusuario",updateUsuario)
router.post("/Login",logandoUsuario);
router.post("/verficandoCadastro",verificandoCadastro);
router.post("/buscandousuario",buscandousuario);
module.exports=router;