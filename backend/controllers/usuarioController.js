const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuarioModel");

const buscarUsuarios= async(req,res)=>{
    try {
        const data = await Usuario.findAll();
        if (data.length>0){
            return res.status(200).json({message:"Dados de usuários recebidos com sucesso" ,data});
         }
         else{
            return res.status(404).json({message:"Nao possui encontrar os usuários"})
         }
    } catch (error) {
        return res.status(500).json({ message:"Erro para conectar no banco de dados" });
    }
}

const cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha, telefone } = req.body;

        const novoUsuario = await Usuario.create({ nome, email, senha, telefone });
        
        if (novoUsuario) {
            // Usuário criado com sucesso
            return res.status(201).json({ message: "Usuário criado com sucesso", data: novoUsuario });
        } else {
            // Caso a criação do usuário falhe (muito improvável com Sequelize)
            return res.status(400).json({ message: "Não foi possível cadastrar usuário" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao conectar no banco de dados", error: error.message });
    }
};

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha, telefone, idusuario } = req.body;
    try {
        const [affectedRows,updatedUsuarios] = await Usuario.update(
            { nome, email, senha, telefone },
            { returning: true, where: { idusuario } }
        );
        if (updatedUsuarios> 0) {
            const dado=await Usuario.findByPk(idusuario)
            return res.status(200).json({ message: "Usuário atualizado com sucesso",dado});
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar esse usuário para atualizar" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro ao conectar no banco de dados", error: error.message });
    }
};

const deletarUsuario= async(req,res)=>{
    const {idusuario} = req.body;
    try {
        const apagando= await Usuario.destroy({ where: { idusuario } });
        if(apagando>0){
            return res.status(200).json({ message: "Usuário deletado com sucesso" });
        }
        else{
            return res.status(404).json({ message: "Não foi possível encontrar esse usuário para deletar" });
        }
        
    } catch (error) {
        return res.status(500).json({ message: "Erro ao conectar no banco de dados", error: error.message });
    }
}
const logarUsuario=async(req,res)=>{
    const {email,senha}=req.body
    try {
        const busca=await Usuario.findAll({where:{email,senha}})
        if(busca.length>0){
            console.log("Login realizado com sucesso")
            const token = jwt.sign({ idusuario: busca[0].idusuario }, senha, { expiresIn: '1d' });
            return res.status(200).json({ message:"Usuario encontrado com sucesso", auth: true, token }); 
        }
        else{
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" , error:error.message });
    }
} 

const buscarUsuario=async(req,res)=>{
    const {idusuario}=req.body
    try {
        const busca=await Usuario.findAll( nome, email, { where:{idusuario} })
        console.log(busca)
        console.log(busca.length)
        if(busca.length>0){
            return res.status(200).json({ message:"Usuario encontrado com sucesso",busca })
        }
        else{
            return res.status(404).json({ message:"Não foi encontrado nenhum usuário com esse id" })
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" , error:error.message });
    }
} 
module.exports= {cadastrarUsuario,atualizarUsuario,deletarUsuario,logarUsuario,buscarUsuario,buscarUsuarios}