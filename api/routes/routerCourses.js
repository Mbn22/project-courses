const express=require('express');
const route=express.Router();
const middleware = require ('../controller/middleware')

route.use(express.static('public'))


route.get('/',middleware.findcourses );
    

    //add courses page
    route.route('/add_course').get(middleware.getaddcourse)
    .post(middleware.addcourses)



route.use('/update_course/',require("./coursesDetail"))






   


module.exports=route;
