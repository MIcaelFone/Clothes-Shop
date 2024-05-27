const jwtService = require("jsonwebtoken");
const middlaware_authentication=(req,res,next)=>{
    const jwt = req.headers["authorization"];
    const senha = req.body.senha
    jwtService.verify(jwt,senha,(err,infouser)=>{
        console.log('erro: ', err)
        if(err){
            res.sendStatus(403).end();
            return;
        }
        req.infouser=infouser;
        next();
    });
}

module.exports = middlaware_authentication;

