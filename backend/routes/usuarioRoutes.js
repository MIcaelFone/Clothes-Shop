const {cadastrarUsuario,atualizarUsuario,deletarUsuario,logarUsuario,buscarUsuario,buscarUsuarios} =require("../controllers/usuarioController");
const express = require('express');
const router= express.Router();  
router.get("/listarusuarios",buscarUsuarios);
router.post("/cadastrarusuario",cadastrarUsuario)
router.delete("/deletarusuario",deletarUsuario)
router.put("/atualizarusuario",atualizarUsuario)
router.post("/Login",logarUsuario);
router.post("/buscarusuario",buscarUsuario);
module.exports=router;