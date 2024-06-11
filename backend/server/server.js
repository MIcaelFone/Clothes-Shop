const express = require("express");
const bodyParser = require('body-parser'); 
const db = require("../database/db")
const cors = require('cors');
const produtoRoutes =require("../routes/produto")
const usuarioRoutes =require("../routes/usuario")
const cartaoRoutes =require("../routes/cartao");
const middlaware_authentication = require("../middleware/middleware");
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use('/produto',produtoRoutes)
app.use('/usuario',usuarioRoutes)
app.use('/cartao',cartaoRoutes)
app.listen(8080,()=>{
    console.log("Servidor está logado na porta 8080")
})
