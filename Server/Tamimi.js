var express = require("express");;
var router = express.Router()

const Tamimi = require("../database/Tamimi");


router.get("/id", (req, res) => {
    Tamimi.init(() => {
        res.send("This is Hello from Tamimi server")
    })
})

router.post("/addpost", (req, res) => {
    let creat = req.body
    // console.log("SERVER", creat)
    //console.log("Server Body:", req.body)
    Tamimi.createPosts(creat, result => {
        res.json(result);
    });
    // console.log("hi")
 });



module.exports = router;