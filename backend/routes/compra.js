const express = require('express');
const router = express.Router();
const {addPedido,addItem,retornarInformacao,retornarProdutos}=require('../controllers/compra')
router.post("/cadastrarpedido",addPedido)
router.post("/adicionaritem",addItem)
router.post("/pedidosrealizados",retornarInformacao)
router.post("/produtospedidos",retornarProdutos)
module.exports=router