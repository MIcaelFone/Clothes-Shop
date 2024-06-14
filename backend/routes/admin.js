const {addAdmin,loginAdmin,searchAdminbyId,updateAdmin,deleteAdmin} = require("../controllers/admin")
const express = require('express');
const router = express.Router();

router.post("/cadastraradmin",addAdmin)
router.post("/login",loginAdmin)
router.post("/buscandoadmin",searchAdminbyId)
router.put("/atualizaradmin",updateAdmin)
router.delete("/deletaradmin",deleteAdmin)

module.exports=router