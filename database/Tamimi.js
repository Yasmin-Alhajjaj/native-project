const db = require('../database');

let init = (cb) => {
  console.log("hello tamimi")
 }
 
 let createPosts = (addedPost, cb) => {
  console.log("database")
  db.posts.create(addedPost, (err, data) => {
    if (err) {
      cb(err);
    }
    else {
      console.log("DB:createTasks My Posts data", data);
      cb(data)
      // getPosts(cb);
    }
  }
  );
 };
 
 module.exports = { init,
  createPosts }
