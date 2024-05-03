const {getUsuario,addUsuario,updateUsuario,deleteUsuario} =require("../controllers/usuario");
const express = require('express');
const router= express.Router();  

router.get("/",getUsuario);
router.post("/cadastrousuario",addUsuario)
router.delete("/:id",deleteUsuario)
router.put("/:id",updateUsuario)

module.exports=router;