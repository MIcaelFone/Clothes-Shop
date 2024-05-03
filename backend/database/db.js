const mysql = require('mysql');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mica@1234",
    database:"banco"
})
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database");
});
module.exports=db;