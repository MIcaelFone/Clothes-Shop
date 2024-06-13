const {addProduto, deleteProduto, updateProduto, getProduto,getProdutofeminino,getProdutomasculino, buscandoprodutoespecifico, getAllProdutos} = require('../controllers/produto');
const express = require('express');
const router = express.Router();

router.get("/produtosmasculino",  getProdutomasculino);
router.get("/produtosfeminino", getProdutofeminino);
router.get('/cadastroprodutolistar',  getProduto);
router.delete('/deletandoproduto/:id',  deleteProduto);
router.post('/cadastrarproduto', addProduto);
router.put('/atualizandoproduto/:id', updateProduto);
router.post('/buscandoprodutoespecifico',buscandoprodutoespecifico);
router.get('/pegandoTodosProdutos', getAllProdutos)
module.exports = router;