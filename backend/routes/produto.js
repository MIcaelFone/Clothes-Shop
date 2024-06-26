const {addProduto, deleteProduto, updateProduto, getProduto,getProdutofeminino,getProdutomasculino, buscandoprodutoespecifico} = require('../controllers/produto');
const express = require('express');
const router = express.Router();

router.get("/produtosmasculino",  getProdutomasculino);
router.get("/produtosfeminino", getProdutofeminino);
router.get('/cadastroprodutolistar',  getProduto);
router.delete('/deletandoproduto',  deleteProduto);
router.post('/cadastrarproduto', addProduto);
router.put('/atualizandoproduto', updateProduto);
router.post('/buscandoprodutoespecifico',buscandoprodutoespecifico);
module.exports = router;