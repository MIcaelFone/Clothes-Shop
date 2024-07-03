const Cartao = require("../models/CartaoModel");
const cadastrarCartao= async(req,res)=>{
   const { nome,numero,expiry,cvc,idusuario }=req.body
   console.log(req.body)
   try {
      const cartaoCadastrar= await Cartao.create({numero,nome,expiry,cvc,idusuario})
      if(cartaoCadastrar){
          return res.status(201).json({ message: "Cartão cadastrado com sucesso" });
      }
      else{
          return res.status(404).json({ message: "Não foi possível cadastrar o cartão" });
      }
      
   } catch (error) {
        return res.status(500).json({ message: "Erro para conectar no banco de dados" });  
   }
                                                 
}
const buscarCartoes=async(req,res)=>{
   const { idusuario } =req.body
   try {
      const cadastrarCartao= await Cartao.findAll({where:{idusuario}})
      if(cadastrarCartao.length>0){
          return res.status(200).json({ message: "Cartão encontrado com sucesso",data:cadastrarCartao });
      }
      else{
         return res.status(404).json({ message: "Não foi possível encontrar o cartão" });
      }  
   } catch (error) {
     return res.status(500).json({ message: "Erro para conectar no banco de dados" });  
   }
}
const buscarCartao= async(req,res)=>{
   const { numero }=req.body
   try {
      console.log(numero)
      const buscarCartao= await Cartao.findOne( { where:{numero} } )
      console.log(buscarCartao)
      if(buscarCartao){
         return res.status(200).json({ message: "Cartão encontrado com sucesso",data:buscarCartao });
      }
      else{
         return res.status(404).json({ message: "Não foi possível encontrar o cartão" }); 
      }
   } catch (error) {
      return res.status(500).json({ message: "Erro para conectar no banco de dados" });
   }
}
const atualizaCartao=async(req,res)=>{
   const { nome,expiry,cvc,numero }=req.body
   try {
      const atualizarCartao= await Cartao.update({nome,expiry,cvc},{where:{numero}})
      if(atualizarCartao>0){
         return res.status(200).json({ message: "Cartão atualizado com sucesso" });
      }
      else{
         return res.status(404).json({ message: "Não foi possível encontrar o cartão" });
      }	
   } catch (error) {
      return res.status(500).json({ message: "Erro para conectar no banco de dados" });
   }
}

const deletarCartao=async(req,res)=>{
   const { numero }=req.body
   try {
      const deletarCartao= await Cartao.destroy({where:{numero }})
      if(deletarCartao>0){
         return res.status(200).json({ message: "Cartão deletado com sucesso" });
      }
      else{
         return res.status(404).json({ message: "Não foi possível encontrar o cartão" });
      }
   } catch (error) {
      return res.status(500).json({ message: "Erro para conectar no banco de dados" });
   }
} 
module.exports={cadastrarCartao,buscarCartoes,buscarCartao,atualizaCartao,deletarCartao}
