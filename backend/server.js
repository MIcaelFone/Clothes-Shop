const express = require("express");
const cors = require('cors');
const app =express();
app.listen(8080,()=>{
    console.log("Servidor está logado na porta 8080")
})
app.use(cors())
app.use(express.json())
app.post("/Cadastroproduto", (req,res) => {
    const nome=req.body.name
    const marca =req.body.marca
    
})