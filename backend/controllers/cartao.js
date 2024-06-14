const db=require('../database/db');

const cadastrandocartao=(req,res)=>{
     const insercao="INSERT INTO cartao (nome,numerocartao,expiry,cvc,idusuario) VALUES (?,?,?,?,?)"
     const {nome,numerocartao,expiry,cvc,idusuario}=req.body
     const values=[nome,numerocartao,expiry,cvc,idusuario]
     db.query(insercao,values,(err,data)=>{
       if(err){
            return res.status(500).json( { message:"Não foi possível conectar no Banco de dados" } )
       }
       else if(data.affectedRows>0){
          return res.status(201).json({ message: "Cartão cadastrado com sucesso" });
       }
       else{
          return res.status(404).json({ message: "Não foi possível cadastrar o cartão" });
       }
     })                                                               
}
const buscarCartaousuario=(req,res)=>{
 const busca="SELECT * FROM cartao WHERE idusuario=?"
 const {idusuario} =req.body
 const value=[idusuario]
 db.query(busca,value,(err,data)=>{
   if(err){
      return res.status(500).json({ message:"Erro para conectar com o banco de dados" })
   }
   else if(data.length>0){
      return res.status(200).json( { message:"Cartão encontrado com sucesso", data } )
   }
   else{
      return res.status(404).json( { message:"Não foi possivel encontrar cartão"} )
   } 
 })   
}
const buscarcartaonumeroCartao=(req,res)=>{
   const busca="SELECT * FROM cartao WHERE numerocartao=?"
   const {numerocartao}=req.body
   const value=[numerocartao]
   db.query(busca,value,(err,data)=>{
      if(err){
         return res.status(500).json({ message:"Erro para conectar no banco de dados" })   
      }
      else if(data.length>0){
         return res.status(200).json({ message:"Cartão foi encontrado com sucesso deste número",data })
      }
      else{
         return res.status(404).json({ message:"Não foi possui encontrar o cartão deste número" })
      }
   })
}
const atualizaCartao=(req,res)=>{
   const atualizacao="UPDATE cartao SET nome = ?,expiry = ?,cvc = ?;"
   const {nome,expiry,cvc}=req.body
   const values=[nome,expiry,cvc]
   db.query(atualizacao,values,(err,data)=>{
      if(err){
         return res.status(500).json({ message:"Erro para conectar no conectar no banco de dados" }) 
      }
      else if (data.affectedRows>0){
         return res.status(200).json({ message:"Dados foram atualizados com sucesso" })
      }
      else{
         return res.status(404).json({ message:"Dados não foram encontrados para atualização" })
      }
   })
   
}

const deleteCartao=(req,res)=>{
   const deletacartao="DELETE FROM cartao WHERE numerocartao = ?;"
   const {numerocartao}=req.body
   const value=[numerocartao]
   db.query(deletacartao,value,(err,data)=>{
      if(err){
         return res.status(500).json({ message:"Erro para conectar no conectar no banco de dados" }) 
      }
      else if (data.affectedRows>0){
         return res.status(200).json({ message:"Dados foram excluídos com sucesso" })
      }
      else{
         return res.status(404).json({ message:"Dados não foram encontrados para remover" })
      }
   })
} 
module.exports={cadastrandocartao,buscarCartaousuario,buscarcartaonumeroCartao,atualizaCartao,deleteCartao}
