var express = require("express");;
var router= express.Router()

const Yasmin = require("../database/Yasmin");


router.get("/id",(req,res)=>{
   Yasmin.init(() => {
    res.json("This is yasmin server")
    })
})



router.get('/defult', (req, res) => {
    Yasmin.creatdefult((result) => {
      res.json(result);
    })
  });





  /////////getallpost
router.get('/all', (req, res) => {
    Yasmin.getallpost((result) => {
      //console.log('result:', result)
       res.json(result);
     }) 
    });


 /////////getallpostname
 router.get('/allname/:postname', (req, res) => {
  let postname = (req.params.postname);

  Yasmin.getallpostname((result) => {
    //console.log('result:', result)
     res.json(result);
   },postname) 
  });


    


    /////////booking
    router.put('/book/:booking/:namebook', (req, res) => {
      let booking = (req.params.booking);
      let namebook = (req.params.namebook);
      console.log("update",booking,namebook)

      Yasmin.booking((result) => {
        //console.log('result:', result)
         res.json(result);
       },booking,namebook) 
      });








    router.get('/defultuser', (req, res) => {
      Yasmin.creatdefultuser((result) => {
        res.json(result);
      })
    });
  
//////////////aarag
    router.post("/user", (req, res) => {
      const user = req.body;
      Yasmin.addUser(user, result => {
        res.send(result);
      });
    });
    
    router.post("/auth", (req, res) => {
      console.log("user", req.body);
      const user = req.body;
    
      Yasmin.auth(user, result => {
        res.json(result);
      });
    });


 

module.exports=router;