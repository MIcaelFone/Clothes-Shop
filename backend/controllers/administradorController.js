const jwt = require("jsonwebtoken");
const Administrador = require("../models/AdministradorModel");
const cadastrarAdministrador = async(req, res) => {
    const { nome, email, senha, telefone } = req.body;
    try {
        const cadastrarAdmin = await Administrador.create(nome, email, senha, telefone);
        if (cadastrarAdmin>0) {
            return res.status(201).json({ message: "Admin cadastrado com sucesso" });
        } else {
            return res.status(404).json({ message: "Não foi possível cadastrar o admin" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
    }
};
const buscarAdministrador = async (req, res) => {
    const { idadmin } = req.body;
    try {
        const buscaAdministrador= await Administrador.findOne({where: {idadmin}})
        if (buscaAdministrador) {
            return res.status(200).json({ message: "Administrador encontrado com sucesso", data: buscaAdministrador });
        } else {
            return res.status(404).json({ message: "Não foi possível encontrar o admin" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
    }
};

const atualizandoAdministrador = async(req, res) => {
    const { nome, email, senha, telefone, idadmin } = req.body;
    try {
        const atualizarAdministador=await Administrador.update({ nome, email, senha, telefone }, { where: { idadmin } });
        if (atualizarAdministador>0) {
            return res.status(200).json({ message: "Administra atualizado com sucesso" });
        }
        else{
            return res.status(404).json({ message: "Não foi possível atualizar o admin" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
    }    
};

const deletarAdministrador = async(req, res) => {
    const { idadmin } = req.body;
    try {
        const delatandoAdmin = await Administrador.destroy({ where: { idadmin } });
        if (delatandoAdmin>0) {
            return res.status(200).json({ message: "Admin deletado com sucesso" });
        } else {
            return res.status(404).json({ message: "Não foi possível deletar o admin" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
    }
}

const logarAdministrador=async(req,res)=>{
    const {email,senha}=req.body
    try {
        const buscaAdministrador=await Administrador.findOne({where:{email,senha}})
        if(buscaAdministrador){
           return res.status(200).json({ message: "Administrador encontrado com sucesso", data: buscaAdministrador });
        }
        else{
            return res.status(404).json({ message: "Não foi possível encontrar o admin" });
        }    
    } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });
    }

}
module.exports={cadastrarAdministrador,buscarAdministrador,atualizandoAdministrador,deletarAdministrador,logarAdministrador}