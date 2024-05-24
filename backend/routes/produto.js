const {addProduto, deleteProduto, updateProduto, getProduto, test,getProdutofeminino,getProdutomasculino} = require('../controllers/produto');
const express = require('express');
const middlaware_authentication =require("../middleware/middleware");
const router = express.Router();

router.get("/helloworld", test);
router.get("/produtosmasculino",middlaware_authentication,  getProdutomasculino);
router.get("/produtosfeminino",middlaware_authentication, getProdutofeminino);
router.get('/cadastroprodutolistar',middlaware_authentication,  getProduto);
router.delete('/deletandoproduto/:id',middlaware_authentication,  deleteProduto);
router.post('/cadastrarproduto',middlaware_authentication, addProduto);
router.put('/atualizandoproduto/:id', middlaware_authentication, updateProduto);

module.exports = router;