const Produto = require('../models/produtoModel');
const buscarProdutos = async (req,res) => {
    try {
        const data = await Produto.findAll();
        if (data.length>0) {
            return res.status(200).json({ message: "Dados de produtos recebidos com sucesso", data:data });
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar os produtos" });
        } 
    } catch (error) {
        return res.status(500).json({ message: "Ersssro para conectar no banco de dados" });
    } 
};

const cadastrarProduto = async(req,res) => {
    const { nome, marca, descricao, preco, moda } = req.body;
    try {
        const cadastrarProduto= await Produto.create({nome,marca,descricao,preco,moda}); 
        if(cadastrarProduto){
            return res.status(201).json({ message: "Produto inserido com sucesso" });
        }
        else{
            return res.status(400).json({ message: "Não foi possível inserir o produto" });
        }        
    } catch (error) {
        return res.status(500).json({ error: 'Não foi possível para conectar no banco de dados' })
    }
};
const buscarProduto = async(req, res) => {
    const { nome } = req.body;
    try {
        const busca= await Produto.findOne({where: {nome}})
        if (busca) {
            return res.status(200).json({ message: "Produto encontrado com sucesso", data: busca });
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar o produto" });
        }
        
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
        
    }
}
const deletarProduto = async (req, res) => {
    const { idproduto } = req.body;
    try {
        const apagando=await Produto.destroy({ where: { idproduto } });
        if(apagando>0){
            return res.status(200).json({ message: "Produto deletado com sucesso" });
        }
        else{
            return res.status(404).json({ message: "Produto não encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
    }
};

const atualizarProduto = async (req, res) => {
    try {
        const atualizado=await Produto.update({ nome, marca, descricao, preco }, { where: { idproduto } });
        if (atualizado>0) {
            return res.status(200).json({ message: "Produto atualizado com sucesso" });
        }
        else{
            return res.status(404).json({ message: "Produto não encontrado" });
        }
    } catch (error) {
       return res.status(500).json({ message: "Erro para conectar no banco de dados" });   
    }
};

const buscarProdutosFeminino= async(req,res)=>{
    try {
        const produtosFeminino=await Produto.findAll({ where:{moda:'moda_feminina'} })
        if (produtosFeminino.length > 0) {
            return res.status(200).json(produtosFeminino);
        } else {
            return res.status(404).json({ message: "Nenhum produto feminino encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Erro para conectar no banco de dados" });
    }   
}

const buscarProdutosMasculino = async(req, res) => {
    try {
        const produtosMasculino=await Produto.findAll({where:{moda:'moda_masculina'}})
        if (produtosMasculino.length > 0) {
            return res.status(200).json(produtosMasculino);
        } else {
            return res.status(404).json({ message: "Nenhum produto masculino encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Erro para conectar no banco de dados" });
    }
};


module.exports = {
    buscarProdutos,
    cadastrarProduto,
    buscarProduto,
    deletarProduto,
    atualizarProduto,
    buscarProdutosFeminino,
    buscarProdutosMasculino
};