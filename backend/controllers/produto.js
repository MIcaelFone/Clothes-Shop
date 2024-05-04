 const db=require('../database/db');

const test = (req, res) => {
    return res.sendStatus(200);
}

const getProduto = (_, res) => {
    const busca = "SELECT * FROM produto";
    db.query(busca, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: 'An error occurred' });
        }
        return res.status(200).json(data);
    });
};

const addProduto = (req, res) => {
    const { nome, marca, descricao, preco, imagem, moda } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!nome || !marca || !descricao || !preco || !imagem) {
        return res.status(400).json("Todos os campos são necessários");
    }

    const insercao = "INSERT INTO produto(nome,marca,descricao,preco,imagem,moda) VALUES (?,?,?,?,?,?)";
    const values = [nome, marca, descricao, preco, imagem, moda];

    db.query(insercao, values, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: 'An error occurred' });
        }
        return res.status(200).json("Produto inserido");
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

    "UPDATE produto SET nome=?,marca=?,descricao=?, preco=?,imagem=?,moda=? WHERE id =?"
    
    db.query(atualizando, [...values,[req.params.id]], (err) => {
        if(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto atualizado");
    });
};
const getProdutofeminino=(req,res)=>{

    const busca="SELECT * FROM produto where moda='moda_feminina'";

    db.query(busca,(data,err =>{
        if (err) throw res.Status(500).json(data);
        res.Status(200).json("Busca de produtos femininos")
    })   
)};
const getProdutomasculino=(req,res)=>{

    const busca="SELECT * FROM produto where moda='moda_masculino'";


    db.query(busca,(data,err =>{
        if (err) throw res.Status(500).json(data);
        res.Status(200).json("Busca de produtos masculinos")
    }) 
)};

module.exports = { getProduto, addProduto, deleteProduto, updateProduto, test ,getProdutofeminino,getProdutomasculino };
