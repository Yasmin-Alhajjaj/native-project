const db = require('../database');

let init = (cb) => {
  console.log("hello")
 }


 ////////////creat post defult
let creatdefult = (cb) => {
  db.posts.create(
    {    img: "",
      category: "الكترونيات",
      state: "عمان",
      description: "تلفون سامسونج",
      name:"omaima",
      password:"111111",
      booking:false,
      namebook:""

},(err, data) => {
  
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}



//////////creat user defult
let creatdefultuser = (cb) => {
  db.signUp.create(
   {name: "yasmin",
   email:"yasmin.alhajjaj@gmail.com",
   password:"123456",
    mobile: 1234567890,
    },
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}



///////getallpost
let getallpost = (cb) => {
  db.posts.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
       // console.log("data:", data);
        cb(data);
      }
    }).sort({_id: -1});
    }


///////getallpostname
let getallpostname = (cb,postname) => {
  db.posts.find({name:postname}, (err, data) => {
      if (err) {
        cb(err);
      } else {
       // console.log("data:", data);
        cb(data);
      }
    }).sort({_id: -1});
    }




  
///////booking
let booking = (cb,booking,namebook) => {
  db.posts.updateOne({_id:booking}, { $set: { booking: true, namebook:namebook }}, (err, data) => {
      if (err) {
        cb(err);
      } else {
       // console.log("data:", data);
        cb(data);
      }
    });
    }


///////////aaraj
let addUser = (repo, cb) => {
  db.signUp.create(repo, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};


let auth = (user, cb) => {
  db.signUp.find(user, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};


 
 
 module.exports = { init,
  creatdefultuser,
  creatdefult,
  getallpost,
  getallpostname,
  booking,
  addUser,
  auth
}