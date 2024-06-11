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
    const cadastrado = "INSERT INTO usuario(nome, email, senha, telefone) VALUES (?, ?, ?, ?)";
    const { nome, email, senha, telefone } = req.body;
    if (!nome || !email || !senha || !telefone) {
        return res.status(400).json("Todos os campos são necessários");
    }
    const values = [nome, email, senha, telefone];
    db.query(cadastrado, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Ocorreu um erro para conectar no Banco de Dados' });
        }
        else if (data.affectedRows>0){
            return res.status(201).json( { message:"Usuário inserido com sucesso"});
        }
        else{
            return res.status(404).json( {message: "Usuário não pode ser cadastrado"} )
        }
        
        
    });
};
const updateUsuario=(req,res)=>{
    const alterando ="UPDATE usuario SET nome = ?, email = ?,senha = ?,telefone = ? WHERE idusuario = ?"
    const { nome, email, senha, telefone,idusuario } = req.body;
    const values = [nome, email, senha, telefone,idusuario];
    db.query(alterando, values , (err,data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Ocorreu um erro ao para conectar no banco' });
        }
        else if(data.affectedRows>0){
            console.log("Deu certo")
            return res.status(200).json({message:"Usuário alterado com sucesso"});   
        }
        else{
            console.log("Deu erro")
            return res.status(404).json({message:"Valores de campos cadastados não encontrado"})
        }
    });
};
const deleteUsuario=(req,res)=>{
    const deletando ="DELETE FROM usuario WHERE idusuario = ?"
    const {idusuario} = req.body;
    const value=[idusuario]
    db.query(deletando,value, (err,data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Ocorreu um erro para conectar no Banco de dados' });
        }
        else if(data.affectedRows>0){
            return res.status(200).json( { message:"Usuário deletado com sucesso"});
        }
        else{
            return res.status(404).json({ message: "Não foi possivel encontrar esse usuário para remover"})
        }
        
    });
};
const logandoUsuario=(req,res)=>{
    const busca = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
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
            const token = jwt.sign({ idusuario: data[0].idusuario }, senha, { expiresIn: '1d' });
            return res.status(200).json({ auth: true, token }); 
        }
    })
}
const verificandoCadastro=(req,res)=>{
    const busca= "SELECT nome,email,telefone From usuario WHERE nome=? OR email=?"
    const { email,telefone, nome } = req.body;
    const values = [nome, telefone, email]; 
    db.query(busca,values,(err,data)=>{
        
        if(err){
            return res.status(500).json({message:"Erro para conectar ao banco de dados"})
        }
        else if(data.length>0){
            return res.status(400).json({ message: "Cadastro fornecedido de informa inválida" });
        }
        else if(data.length===0){
            return res.status(204).json({ message: "Cadastro válido" });
        }
    })
}
const buscandousuario=(req,res)=>{
    const busca="SELECT nome,email,telefone,senha From usuario WHERE idusuario=?"
    const {idusuario}=req.body
    const value=[idusuario]
    db.query(busca,value,(err,data)=>{
        if(err){
            return res.status(500).json({ message: "Erro para conectar no banco de dados" })  
        }
        else if(data.length>0){
            return res.status(200).json( { message: "Busca realizada com sucesso",data})
        }
        else{
            return res.status(404).json({ message: "Não foi encontrado nenhum usuáro com esse nome"})
        }
    })
} 
module.exports= {getUsuario,addUsuario,updateUsuario,deleteUsuario,logandoUsuario,verificandoCadastro,buscandousuario}