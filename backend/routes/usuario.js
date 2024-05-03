const {getUsuario,addUsuario,updateUsuario,deleteUsuario} =require("../controllers/usuario");
const express = require('express');
const router= express.Router();  

router.get("/listarUsuarios",getUsuario);
router.post("/cadastroUsuario",addUsuario)
router.delete("/deletandoUsuario/:id",deleteUsuario)
router.put("/atualizandousuario/:id",updateUsuario)

module.exports=router;