var express = require("express");;
var router= express.Router()

const Ahmad = require("../database/Ahmad");


router.get("/id",(req,res)=>{
   Ahmad.init(() => {
    res.send("This is ahmad server")
    })
})



 

module.exports=router;