const jwtService = require("jsonwebtoken");
const chaveprivada="jwtSecretKey"
const middlaware_authentication=(req,res,next)=>{
    const jwt = req.headers["authorization"];
    jwtService.verify(jwt,chaveprivada,(err,infouser)=>{
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

