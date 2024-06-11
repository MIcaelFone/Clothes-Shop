const {cadastrandocartao,buscarCartaousuario,buscarcartaonumeroCartao,atualizaCartao,deleteCartao} = require("../controllers/cartao")
const express = require('express');
const router = express.Router();

router.post("/cadastrarcartao",cadastrandocartao)
router.post("/buscarcartao",buscarCartaousuario)
router.post("/buscarcartaonumerocartao",buscarcartaonumeroCartao)
router.put("/atualizacartao",atualizaCartao)   
router.delete("/deletacartao",deleteCartao)
module.exports=router