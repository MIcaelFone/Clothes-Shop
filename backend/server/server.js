const express = require("express");

const fs =require('fs')
const cors = require('cors');
const produtoRoutes =require("../routes/produto")
const usuarioRoutes =require("../routes/usuario")
const app =express();

app.use(cors())
app.use(express.json())
app.use('/produto',produtoRoutes)
app.use('/usuario',usuarioRoutes)

app.listen(8080,()=>{
    console.log("Servidor está logado na porta 8080")
})

