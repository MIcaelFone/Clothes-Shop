const {cadastrarAdministrador,buscarAdministrador,atualizandoAdministrador,deletarAdministrador,logarAdministrador} = require("../controllers/administradorController")
const express = require('express');
const router = express.Router();
router.post("/cadastraradministrador",cadastrarAdministrador)
router.post("/login",logarAdministrador)
router.post("/buscaradministrador",buscarAdministrador)
router.put("/atualizaradministrador",atualizandoAdministrador)
router.delete("/deletaradministrador",deletarAdministrador)
module.exports=router