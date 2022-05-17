const express=require('express');
const route=express.Router();
const middleware = require ('../controller/middleware');

route.use(express.static('public'))




route.route('/:id')

// get request detail

.get(middleware.getrequest)

//  update profile user 

.post(middleware.updateProfileuser)


module.exports=route;