 const db=require('../database/db');

const getProduto = (_, res) => {
    const busca = "SELECT * FROM produto";
    db.query(busca, (err, data) => {
        if(err) {
            return res.status(500).json({ error: 'Erro para conectar ao banco de dados' });
        }
        return res.status(200).json(data);
    });
};

const addProduto = (req, res) => {
    const { nome, marca, descricao, preco, moda } = req.body;

    if (!nome || !marca || !descricao || !preco) {
        return res.status(400).json("Todos os campos são necessários");
    }
    const insercao = "INSERT INTO produto(nome,marca,descricao,preco,moda) VALUES (?,?,?,?,?)";
    const values = [nome, marca, descricao, preco, moda];
     
    db.query(insercao, values, (err,data) => {
        if(err) {
            return res.status(500).json({ error: 'Não foi possível para conectar no banco de dados' });
        }
        if(data.affectedRows>0){
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

    // Verifica se o nome foi passado e se é uma string
    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ message: "Nome do produto inválido" });
    }

    const value = [nome];

    db.query(busca, value, (err, data) => {
        console.log("Entrou na query");
        if (err) {
            console.error("Erro ao conectar ao banco de dados:", err);
            return res.status(500).json({ message: "Não foi possível conectar ao banco de dados" });
        }

        if (data.length > 0) {
            return res.status(200).json({ message: "Busca realizada com sucesso", data: data });
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar o produto" });
        }
    });
};


const deleteProduto = (req, res) => {
    const deletando = "DELETE FROM produto WHERE idproduto = ?";
    const { idproduto } = req.body;
    const values = [idproduto];
    db.query(deletando, values, (err,data) => {
        if(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        else if(data.affectedRows > 0) {
            return res.status(200).json({ message: "Produto deletado com sucesso" });
        }
        else {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
    });
};

const updateProduto = (req, res) => {
    const { nome, marca, descricao, preco, idproduto } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!nome || !marca || !descricao || !preco || !idproduto) {
        return res.status(400).json({ message: "Todos os campos são necessários" });
    }

    const query = "UPDATE produto SET nome = ?, marca = ?, descricao = ?, preco = ? WHERE idproduto = ?";
    const values = [nome, marca, descricao, preco, idproduto];

    db.query(query, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Erro ao atualizar o produto" });
        }

        if (data.affectedRows > 0) {
            return res.status(200).json({ message: "Produto atualizado com sucesso" });
        } else {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
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




module.exports = { getProduto, addProduto, deleteProduto, updateProduto,getProdutofeminino,getProdutomasculino,buscandoprodutoespecifico};
   