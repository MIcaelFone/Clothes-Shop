const mysql = require('mysql');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mica@1234",
    database:"banco"
})
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database");
});
    
  
const test = (req, res) => {
    return res.sendStatus(200);
}

const getProduto = (_, res) => {
    const busca = "SELECT * FROM produto";
    db.query(busca, (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred' });
        }
        return res.status(200).json(data);
    });
};

const addProduto = (req, res) => {
    const { nome, marca, descricao, preco, imagem, moda } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!nome || !marca || !descricao || !preco || !imagem || !moda) {
        return res.status(400).json("Todos os campos são necessários");
    }

    const insercao = "INSERT INTO produto(nome,marca,descricao,preco,imagem,moda) VALUES (?,?,?,?,?,?)";
    const values = [nome, marca, descricao, preco, imagem, moda];

    db.query(insercao, values, (err) => {
        if(err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto inserido");
    });
};

const deleteProduto = (req, res) => {
    const deletando = "DELETE FROM Produto WHERE `id` =?";
    db.query(deletando, [req.params.id], (err) => {
        if(err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto deletado");
    });
};

const updateProduto = (req, res) => {
    const atualizando = "UPDATE Produto SET `nome` =?, `marca` =?, `descricao`=?, `preco` =?, `imagem` =?, `moda`=? WHERE `id` =?";
    const values = [
        req.body.nome,
        req.body.marca,
        req.body.descricao,
        req.body.preco,
        req.body.imagem,
        req.body.moda,
        req.params.id
    ];
    db.query(atualizando, values, (err) => {
        if(err) {
            console.error(err);
            return res.status(500).json(err);
        }
        return res.status(200).json("Produto atualizado");
    });
};

module.exports = { getProduto, addProduto, deleteProduto, updateProduto, test };
