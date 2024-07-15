const {cadastrarCartao,buscarCartoes,buscarCartao,atualizaCartao,deletarCartao} = require("../controllers/cartaoController")
const express = require('express');
const router = express.Router();
router.post("/cadastrarcartao",cadastrarCartao)
router.post("/buscarcartao",buscarCartao)
router.post("/buscarcartoes",buscarCartoes)
router.put("/atualizarcartao",atualizaCartao)   
router.delete("/deletarcartao",deletarCartao)
module.exports=router