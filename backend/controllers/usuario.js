const db=require('../database/db')

const getUsuario=(req,res)=>{
    const busca="Select * from usuario;"
    db.query(busca,(err,data) =>{
         if (err) throw res.status(500).json(data);
         res.status(200).json(data);
    })
  
}
const addUsuario=(req,res)=>{
    const busca="INSERT INTO usuario(nome,email,senha,number)VALUES(?,?,?,?);"
    const {nome,email,senha,number}=req.body
    if (!nome || !email || !senha || !email || !number) {
        return res.status(400).json("Todos os campos são necessários");
    }
    const values=[nome,email,senha,number]
    db.query(insercao,values(err) =>{
        if (err) throw res.status(500).json(data)
        res.status(200).json("Produto inserido")
    });
    });
};
