const PedidoItem = require("../models/PedidoItemModel");
const compra =require("../models/PedidoCompraModel")
const Produto = require("../models/produtoModel");
const sequelize = require("sequelize");
const addPedido =async(req, res) => {
    const {enderenco, idusuario, cidade, CEP, estado, pais,idcartao,valortotal}=req.body
    const busca =await compra.findOne({attributes:[[sequelize.fn('max', sequelize.col('idcompra')), 'maxIdCompra']]
      ,where:{idusuario:idusuario}})
    try { 
      const insercao= await compra.create({enderenco, idusuario, cidade, CEP, estado, pais,idcartao,valortotal})
      if(insercao.dataValues){
        if(busca.dataValues){
          if(busca.dataValues.maxIdCompra==null){
            return res.status(201).json({ message: "Pedido criado com sucesso" ,compra:1 });
          }
          else{
            return res.status(201).json({ message: "Pedido criado com sucesso" ,compra:busca.dataValues.maxIdCompra });
          }  
           
        }
      }
      else if(insercao.dataValues){
        return res.status(404).json({ message: "Não foi possível criar o pedido" });
      }   
  
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Erro para conectar no Banco de dados" ,error:error.message });
    }
   
};

const addItem= async(req,res)=>{
  const {idcompra,idproduto,quantidade}=req.body
  try {
    const adicionandoItem= await PedidoItem.create({idcompra,idproduto,quantidade})
    if(adicionandoItem.dataValues){
      return res.status(201).json({ message: "Item adicionado com sucesso" });
    }
    else{
      return res.status(404).json({ message: "Não foi possível adicionar o item" });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro para conectar no Banco de dados" });  
  }
      
}
const retornarInformacao=async(req,res)=>{
  const {idusuario}=req.body   
  try {
    const busca = await compra.findAll({
      attributes: [
          [sequelize.fn('DISTINCT', sequelize.col('idcompra')), 'idcompra'],
          'enderenco', 
          'cidade', 
          'CEP', 
          'estado', 
          'pais', 
          'valortotal'
      ],
      where: { idusuario: idusuario },
      order: [['idcompra', 'ASC']]
    });

    if (busca.length > 0) {
      return res.status(200).json({ message: "Pedido encontrado com sucesso", data: busca });
    } else {
      return res.status(404).json({ message: "Não foi possível encontrar o pedido desse usuário" });
    }
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro para conectar no Banco de dados" });  
  }
}
const retornarProdutos = async (req, res) => {
  const {idcompra}=req.body
  try {
    const busca= await compra.findAll({
      where:{idcompra:idcompra},
      include:[{
        model:PedidoItem,
        attributes:['quantidade'],
        as:'itens',
        include:[{
        model:Produto,
        attributes:['nome','marca']
        ,as:'produto'}]
      }],
      order:[['idcompra','ASC']]})
    console.log(busca)
    if(busca.length>0){
      return res.status(200).json({ message: "Pedido encontrado com sucesso", data: busca });
    }
    else{
      return res.status(404).json({ message: "Não foi possível encontrar o pedido desse usuário" });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro para conectar no Banco de dados" });
  }
};  
module.exports={addPedido,addItem,retornarInformacao,retornarProdutos}