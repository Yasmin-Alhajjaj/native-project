const db = require('../database');

let init = (cb) => {
  console.log("hello")
 }
 

 const getLost = (cb,cat,city)=> {
  console.log('serverdb',cat,city)
 db.posts.find({ $and: [ { category: cat }, { state: city } ] } ,(err, data) => {
   if (err) cb(err);
   else cb(data);
 });
};
 
 
 module.exports = { init,
  getLost }