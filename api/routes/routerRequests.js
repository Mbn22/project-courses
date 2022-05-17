const express=require('express');
const route=express.Router();
const middleware = require ('../controller/middleware');
   

route.route('/')
.get(middleware.getrequests) 

.post(middleware.postrequest)

route.use('/request'  ,require("./requestDetail"))


module.exports=route;