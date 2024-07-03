const { 
    buscarProdutos,
    cadastrarProduto,
    buscarProduto,
    deletarProduto,
    atualizarProduto,
    buscarProdutosFeminino,
    buscarProdutosMasculino
} = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();
router.get("/buscarprodutosmasculino",  buscarProdutosMasculino);
router.get("/buscarprodutosfeminino", buscarProdutosFeminino);
router.get("/listarproduto",  buscarProduto);
router.delete("/deletarproduto", deletarProduto);
router.post("/cadastrarproduto", cadastrarProduto);
router.put("/atualizarproduto", atualizarProduto);
router.get("/listarprodutos", buscarProdutos);
module.exports = router;