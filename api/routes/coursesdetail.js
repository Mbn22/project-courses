const express=require('express');
const route=express.Router();
const middleware = require ('../controller/middleware');
route.use(express.static('public'))


route.route('/:id')
.get(middleware.getcourse)
.post(middleware.updatecourse)
.delete(middleware.deletecourse)
module.exports=route;