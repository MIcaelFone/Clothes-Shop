const express = require("express");
const cors = require('cors');

const app =express();
const produtoRoutes =require("../backend/routes/produto")

app.use(cors())
app.use(express.json())
app.use(cors())
app.use(express.json())
app.use('/',produtoRoutes)

app.listen(8080,()=>{
    console.log("Servidor está logado na porta 8080")
})

