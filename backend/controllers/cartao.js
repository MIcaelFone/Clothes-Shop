const db=require('../database/db');

const cadastrandocartao=(req,res)=>{
     const insercao="INSERT INTO cartao (nome,numerocartao,expiry,cvc,idusuario) VALUES (?,?,?,?,?)"
     const {nome,numerocartao,expiry,cvc,idusuario}=req.body
     const values=[nome,numerocartao,expiry,cvc,idusuario]
     db.query(insercao,values,(err,data)=>{
       console.log("Entrou")
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

module.exports={cadastrandocartao}
