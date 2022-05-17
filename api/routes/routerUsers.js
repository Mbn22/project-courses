const express=require('express');
const route=express.Router();

const middleware = require ('../controller/middleware');   

route.route('/')
// list of students
.get(middleware.getusers)
//add users
.post(middleware.postuser)

route.route('/user')
.get((req,res)=>{
    res.render("user" )
 })


module.exports=route;