const db = require('../database/db');
const jwt = require("jsonwebtoken");


const getUsuario=(req,res)=>{

    const busca="SELECT * FROM usuario";

    db.query(busca,(err,data) =>{
         if (err) throw res.status(500).json(data);
         res.status(200).json(data);
    })
  
}

const addUsuario = (req, res) => {
    const cadastrado = "INSERT INTO usuario(nome, email, senha, number) VALUES (?, ?, ?, ?)";
    
    const { nome, email, senha,confirmsenha, number } = req.body;

    if (!nome || !email || !senha || !number) {
        return res.status(400).json("Todos os campos são necessários");
    }
    
    const values = [nome, email, senha, number];
  

    db.query(cadastrado, values, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Ocorreu um erro ao inserir o usuário' });
        }
        return res.status(200).json("Usuário inserido com sucesso");
    });

};
const updateUsuario=(req,res)=>{
    const alterando ="UPDATE usuario SET nome =?, email=?,senha=?,number=? WHERE id=?"

    const { nome, email, senha, number } = req.body;
    
    if (!nome || !email || !senha || !number) {
        return res.status(400).json("Todos os campos são necessários");
    }

    const values = [nome, email, senha, number];
    
    db.query(alterando,[...values,[req.params.id]] , (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Ocorreu um erro ao inserir o usuário' });
        }
        return res.status(200).json("Usuário alterado com sucesso");
    });
    };

const deleteUsuario=(req,res)=>{
        const alterando ="DELETE FROM usuario WHERE id=?"
        const { nome, email, senha, number } = req.body;
    
        if (!nome || !email || !senha || !number) {
            return res.status(400).json("Todos os campos são necessários");
        }
       
        db.query(alterando, [req.params.id], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Ocorreu um erro ao inserir o usuário' });
            }
            return res.status(200).json("Usuário deletado com sucesso");
        });
};

const logandoUsuario=(req,res)=>{
    const busca = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
    const {email,senha} =req.body
    const values = [email,senha]
    db.query(busca,values,(err,data)=>{
        console.log("Entrou na busca")
        if (err){
            res.status(500).json({ message: "Erro na realização da busca"})
        }

        else if(data==null || data.length===0){
            res.status(404).json({ message: "Email ou Senha inválidos" });
        }
     
    }
   
)}

const verificandoCadastro=(req,res)=>{
    const busca= "SELECT nome,email From usuario WHERE nome=? AND email=?"
    const { email, nome } = req.body;
    const values = [nome, email]; 
    db.query(busca,values,(err,data)=>{
        console.log("Entrou")
        console.log(nome)
        if(err){
            console.log("Erro")
            res.status(500).json({message:"Erro na realização de busca"})
        }
        else if(data.length>0){
            console.log("Entrou na verifcacao")
            res.status(422).json({message:"Cadastro já existente!"})
        }

    })
}
    
    
module.exports= {getUsuario,addUsuario,updateUsuario,deleteUsuario,logandoUsuario,verificandoCadastro}


