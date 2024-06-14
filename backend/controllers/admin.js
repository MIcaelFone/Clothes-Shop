const db=require('../database/db');
const jwt = require("jsonwebtoken");
const addAdmin = (req, res) => {
    const insercao = "INSERT INTO admin (nome, email, senha, telefone) VALUES (?, ?, ?, ?)";
    const { nome, email, senha, telefone } = req.body;
    const values = [nome, email, senha, telefone];

    db.query(insercao, values, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro ao conectar no Banco de Dados", error: err });
        }
        if (data.affectedRows > 0) {
            return res.status(201).json({ message: "Admin cadastrado com sucesso" });
        } else {
            return res.status(404).json({ message: "Não foi possível cadastrar o admin" });
        }
    });
};
const searchAdminbyId = (req, res) => {
    const insercao = "SELECT * FROM admin WHERE idadmin = ?";
    const { idadmin } = req.body;
    const values = [idadmin];

    db.query(insercao, values, (err, data) => {
        console.log("entrou no searchAdminbyId")
        if (err) {
            return res.status(500).json({ message: "Erro ao conectar no Banco de Dados", error: err });
        }
        if (data.length > 0) {
            return res.status(200).json({ message: "Admin encontrado com sucesso" , data});
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar o admin" });
        }
    });
};

const updateAdmin = (req, res) => {
    const insercao = "UPDATE admin SET nome = ?, email = ?, senha = ?, telefone = ? WHERE idadmin = ?";
    const { nome, email, senha, telefone, idadmin } = req.body;
    const values = [nome, email, senha, telefone, idadmin];
    db.query(insercao, values, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro ao conectar no Banco de Dados", error: err });
        }
        if (data.affectedRows > 0) {
            return res.status(200).json({ message: "Admin atualizado com sucesso" });
        } else {
            return res.status(404).json({ message: "Não foi possível atualizar o admin" });
        }
    });    
    
};

const deleteAdmin = (req, res) => {
  const deletar = "DELETE FROM admin WHERE idadmin = ?";
    const { idadmin } = req.body;
    const values = [idadmin];
    db.query(deletar, values, (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro ao conectar no Banco de Dados", error: err });
        }
        if (data.affectedRows > 0) {
            return res.status(200).json({ message: "Admin deletado com sucesso" });
        } else {
            return res.status(404).json({ message: "Não foi possível deletar o admin" });
        }
    });
}

const loginAdmin=(req,res)=>{
    const busca = "SELECT * FROM admin WHERE email = ? AND senha = ?";
    const {email,senha}=req.body
    const values = [email,senha]
    db.query(busca,values,(err,data)=>{
        if (err){
            res.status(500).json({ message: "Erro para conectar-se ao banco de dados"})
        }
        else if(data==null || data.length===0){
            res.status(404).json({ message: "Email ou Senha não foram encontrados no banco de dados" });
        }
        else if(data.length>0){
            console.log("Login realizado com sucesso")
            const token = jwt.sign({ idadmin: data[0].idadmin }, senha, { expiresIn: '1d' });
            console.log(token)
            return res.status(200).json({ auth: true, token }); 
        }
    })
}
module.exports={addAdmin,loginAdmin,searchAdminbyId,updateAdmin,deleteAdmin}