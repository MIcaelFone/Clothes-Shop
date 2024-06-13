 const db=require('../database/db');

const getProduto = (_, res) => {
    const busca = "SELECT * FROM produto";
    db.query(busca, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: 'Erro para conectar ao banco de dados' });
        }
        return res.status(200).json(data);
    });
};

const addProduto = (req, res) => {
    const { nome, marca, descricao, preco, imagem, moda } = req.body;

    if (!nome || !marca || !descricao || !preco || !imagem) {
        return res.status(400).json("Todos os campos são necessários");
    }
    const insercao = "INSERT INTO produto(nome,marca,descricao,preco,imagem,moda) VALUES (?,?,?,?,?,?)";
    const values = [nome, marca, descricao, preco, imagem, moda];
     
    db.query(insercao, values, (err,data) => {
        if(err) {
            return res.status(500).json({ error: 'Não foi possível para conectar no banco de dados' });
        }
        if(data.affectRow>0){
            return res.status(201).json( { message:"Produto inserido com sucesso" });
        }
        else{
            return res.status(404).json( {message: "Usuário não pode ser cadastrado"} )
        }
        
    });
};
const buscandoprodutoespecifico = (req, res) => {
    const busca = "SELECT * FROM produto WHERE nome = ?";
    const { nome } = req.body;
    const value = [nome]; 

    db.query(busca, value, (err, data) => {
        console.log("Entrou na query");
        if (err) {
            return res.status(500).json({ message: "Não foi possível conectar o banco de dados" });
        }

        if (data.length > 0) {
            return res.status(200).json({ message: "Busca realizada com sucesso", data: data });
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar um produto" });
        }
    });
};

const deleteProduto = (req, res) => {
    const deletando = "DELETE FROM produto WHERE id =?";
    db.query(deletando, [req.params.id], (err) => {
        if(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto deletado");
    });
};

const updateProduto = (req, res) => {
    const { nome, marca, descricao, preco, imagem, moda } = req.body;
    // Verifique se todos os campos necessários estão presentes
    if (!nome || !marca || !descricao || !preco || !imagem || !moda) {
        return res.status(400).json("Todos os campos são necessários");
    }
    const values= { nome, marca, descricao, preco, imagem, moda }
    const atualizando="UPDATE produto SET nome=?,marca=?,descricao=?, preco=?,imagem=?,moda=? WHERE id =?"
    db.query(atualizando, [...values,[req.params.id]], (err) => {
        if(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto atualizado");
    });
};
const getProdutofeminino=(req,res)=>{
    const busca=" SELECT * FROM produto where moda='moda_feminina' ";
    db.query(busca,(err,data) =>{
        if (err) {
            return res.status(500).json({ error: "Erro para conectar no banco de dados" });
        }
        if (data.length > 0) {
           return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: "Nenhum produto feminino encontrado" });
    
        }
    })
}

const getProdutomasculino = (req, res) => {
    const busca = "SELECT * FROM produto WHERE moda='moda_masculina'";
    db.query(busca, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Erro para se conectar no banco de dados" });
        }

        if (data.length > 0) {
            return res.status(200).json(data);
           
        } else {
           return  res.status(404).json({ message: "Não pode encontrar produto masculino" });
           
        }
    });
};

const getAllProdutos = (req, res) => {
    const busca = "SELECT * FROM produto";
    db.query(busca, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Erro para se conectar no banco de dados" });
        }

        if (data.length > 0) {
            return res.status(200).json(data);
           
        } else {
           return  res.status(404).json({ message: "Não pode encontrar produto masculino" });
           
        }
    });
};


module.exports = { getProduto, addProduto, deleteProduto, updateProduto,getProdutofeminino,getProdutomasculino,buscandoprodutoespecifico, getAllProdutos };
   