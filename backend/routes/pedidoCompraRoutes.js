const express = require('express');
const router = express.Router();
const {addPedido,addItem,retornarInformacao,retornarProdutos}=require('../controllers/pedidoCompraController')
router.post("/adicionarpedido",addPedido)
router.post("/adicionaritem",addItem)
router.post("/pedidosrealizados",retornarInformacao)
router.post("/produtospedidos",retornarProdutos)
module.exports=router