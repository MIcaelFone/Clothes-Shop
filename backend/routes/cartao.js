const {cadastrandocartao} = require("../controllers/cartao")
const express = require('express');
const router = express.Router();

router.post("/cadastrarcartao",cadastrandocartao)
module.exports=router