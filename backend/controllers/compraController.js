const addPedido = (req, res) => {
    const insercao = "INSERT INTO compra (enderenco, idusuario, cidade, CEP, estado, pais,idcartao,valortotal) VALUES (?, ?, ?, ?, ?, ?,?,?);";
    const { enderenco, idusuario, cidade, CEP, estado, pais,idcartao,valortotal } = req.body;
    const values = [enderenco, idusuario, cidade, CEP, estado, pais,idcartao,valortotal];
    const busca = "SELECT MAX(idcompra) AS maxIdCompra FROM compra WHERE idusuario = ?";
    db.query(insercao, values, (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "Erro para conectar no Banco de dados" });
        }
        if (data.affectedRows > 0) {
            db.query(busca, [idusuario], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "Erro para conectar no Banco de dados" });
                }
                if (result.length > 0) {
                    const maxIdCompra = result[0].maxIdCompra;
                    return res.status(200).json({ message: "Pedido buscado com sucesso", data: maxIdCompra });
                } else {
                    return res.status(404).json({ message: "Não foi possível buscar o pedido" });
                }
            });
        } else {
            return res.status(404).json({ message: "Não foi possível inserir o pedido" });
        }
    });
};

const addItem=(req,res)=>{
   const insercao="INSERT INTO pedido_item (idcompra,idproduto,quantidade) VALUES(?,?,?);"
   const {idcompra,idproduto,quantidade}=req.body
   const value=[idcompra,idproduto,quantidade]
   db.query(insercao,value,(err,data)=>{
      if(err){
         console.log(err)
         return res.status(500).json({ message:"Erro para conectar no Banco de dados" })
      }
      if(data.affectedRows>0){
         return res.status(201).json({ message:"Pedido criado com sucesso" })
      }
      else{
         return res.status(404).json({message:"Não foi possível inserir o pedido"})
      }
   })
}
const retornarInformacao=(req,res)=>{
    const busca=`SELECT DISTINCT
    c.idcompra,
    c.enderenco,
    c.cidade,
    c.CEP,
    c.estado,
    c.pais,
    c.valortotal
FROM 
    compra AS c
INNER JOIN 
    pedido_item AS pi ON c.idcompra = pi.idcompra
INNER JOIN 
    produto AS pr ON pi.idproduto = pr.idproduto
WHERE 
    c.idusuario = ?
ORDER BY 
    c.idcompra ASC;`
    const {idusuario}=req.body
    const value=[idusuario]
    db.query(busca,value,(err,data)=>{
        if(err){
            return res.status(500).json({ message:"Erro para conectar no Banco de dados" })
        }
        else if(data.length>0){
            return res.status(200).json({ message:"Pedido encontrado com sucesso",data })
        }
        else{
            return res.status(404).json({ message:"Não foi possível encontrar o pedido desse usuário" })
        }
    })
}
const retornarProdutos = (req, res) => {
    const busca = `
      SELECT 
        pr.nome,
        pr.marca,
        pi.quantidade
      FROM 
        compra AS c
      INNER JOIN 
        pedido_item AS pi ON c.idcompra = pi.idcompra
      INNER JOIN 
        produto AS pr ON pi.idproduto = pr.idproduto
      WHERE  
        c.idcompra = ? 
      ORDER BY 
        c.idcompra ASC;
    `;
  
    const { idcompra } = req.body;
  
    if (!idcompra) {
      return res.status(400).json({ message: "O campo 'idcompra' é obrigatório" });
    }
  
    const value = [idcompra];
  
    db.query(busca, value, (err, data) => {
      if (err) {
        console.error("Erro ao conectar no Banco de dados:", err);
        return res.status(500).json({ message: "Erro para conectar no Banco de dados" });
      }
  
      if (data.length > 0) {
        return res.status(200).json({ message: "Pedido encontrado com sucesso", data });
      } else {
        return res.status(404).json({ message: "Não foi possível encontrar o pedido desse usuário" });
      }
    });
  };
  

  
module.exports={addPedido,addItem,retornarInformacao,retornarProdutos}