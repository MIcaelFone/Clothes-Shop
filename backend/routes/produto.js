const {addProduto, deleteProduto, updateProduto, getProduto, test,getProdutofeminino,getProdutomasculino} = require('../controllers/produto');
const express =require('express')
const router=express.Router()

router.get("/helloworld", test)
router.get("/produtosmasculino",getProdutomasculino)
router.get("/produtosfemonino",getProdutofeminino)
router.get('/cadastroprodutolistar',getProduto)
router.delete('/:id',deleteProduto)
router.post('/cadastrarproduto',addProduto)
router.put('/:id',updateProduto)
module.exports = router;