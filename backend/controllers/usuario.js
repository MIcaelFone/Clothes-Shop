const db=require('../database/db')

const getUsuario=(req,res)=>{

    const busca="SELECT * FROM usuario";

    db.query(busca,(err,data) =>{
         if (err) throw res.status(500).json(data);
         res.status(200).json(data);
    })
  
}

const addUsuario = (req, res) => {
    const busca = "INSERT INTO usuario(nome, email, senha, number) VALUES (?, ?, ?, ?)";
    const { nome, email, senha, number } = req.body;

    if (!nome || !email || !senha || !number) {
        return res.status(400).json("Todos os campos são necessários");
    }

    const values = [nome, email, senha, number];

    db.query(busca, values, (err, data) => {
        if (err) {
            console.error(err);
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
    
module.exports= {getUsuario,addUsuario,updateUsuario,deleteUsuario }


