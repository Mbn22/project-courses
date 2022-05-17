const express=require('express');
var Coursedb= require('../model/Courses')
var requests= require('../model/requests')
var users = require('../model/users')
var login = false ;
var user = {} ;
var error ="";
var emailvar ;
// login

exports.connectionTest = (req,res, next )=>{
    if  (login === false ) 
    res.redirect("/login")
    next() 
  }

  exports.identification = (req,res, next)=>{
    users.findOne({email: req.body.email , password:req.body.password } )
    .then(data=> {
      if(!data)
    {   error = "Incorrect username or password"
        res.send({user:data , isloggedin : false});
        
   } 
  else {
    login = true ; 
    error ="";
    user =data
    console.log(user)
    res.send({user:user , isloggedin : login})}
   
  })
    .catch(err=> res.send(err));
  }

  exports.getlogin =(req,res , next)=>{
     
    res.send({user:user , isloggedin : login})
 }

 // courses

 exports.findcourses = (req,res ,next)=>{
    Coursedb.find()
        .then(data =>{
            console.log (data)
            res.send( {courses : data })
        })
        .catch(err=>{
        res.status(500).send(err)
        }) 
    }

    exports.addcourses = (req,res, next)=>{
        //validate request

        const course=new Coursedb({
            coursecode:req.body.coursecode,
            name:req.body.name,
            description:req.body.description,
            cohort:req.body.cohort
        })

        if ((course.name == "")||(course.coursecode =="")||(course.cohort ==""))
         { 
         res.send( "Content can not be empty."  )
        }
        else { 
            
        //new course
       
        //save course in the database
        course
            .save(course)
            .then(data=>{
                //res.send(data)
                res.send( "courses added"  );
            })
            .catch(err=>{
                res.status(500).send("Please check your entries and try again.")
            }) }
    }

    // get course ://
    exports.getcourse = (req,res , next)=>{
        Coursedb.findById(req.params.id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Can not Update course with ${id}. Check if this course exists.`})
            }else{
                console.log(data)
                res.send({course : data , msg :error})
            }
        })
        .catch(err=>{res.status(500).send("Error in Updating user information. Issue: the update operation")})
    }

    exports.updatecourse = (req,res , next)=>{
        const id=req.params.id;
        var course=new Coursedb({
            coursecode:req.body.coursecode,
            name:req.body.name,
            description:req.body.description,
            cohort:req.body.cohort
        })

        if ((course.name == "")||(course.coursecode =="")||(course.cohort ==""))
         { 
         res.send( "Content can not be empty."  )
         
        }
       else
        { 

        Coursedb.findByIdAndUpdate(id, req.body)
        .then(data=>{
            if(!data){
                res.status(404).send(`Can not Update course with ${id}. Check if this course exists.`)
            }else{
                res.send(data)
            }
        })
        .catch(err=>{res.status(500).send("Error in Updating user information. Issue: the update operation")})  
        }
    }

    exports.deletecourse = (req,res , next )=>{
        const id=req.params.id;
        Coursedb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send(`Cannot Delete id ${id}. Maybe the id is incorrect`)
            }else{
                res.send({
                    message:"Course was deleted successfully!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Could not delete course with id="+id})
    })
    } 

    // requests

    exports.getrequests = (req,res , next)=>{
        requests.find()
        .then(data =>{
             res.send({reqs : data }) 
         
        })
        .catch(err=>{
        res.status(500).send(err)})
    }

    exports.postrequest =(req,res , next)=>{
        const request = new requests ({ 
        author : req.body.author ,
        courses : req.body.courses ,
        result : req.body.result  ,
        motivation :  req.body.motivation ,  
        view :  false , 
        treat : false  
    })
    
        request.save(request)
        .then(data =>{
            res.send(data) 
        })
        .catch(err=>{
        res.status(500).send(err)
        }) 
    }

    // get requestdetail

    exports.getrequest = (req,res , next)=>{
        requests.findById(req.params.id)
        .then(data=>{
            if(!data){
                res.status(404).send(err)
            }else{
                
                emailvar = data.author ;
                if(data.view === false)
                {
                requests.findByIdAndUpdate(req.params.id , {view : true })
                .then(result=>{ console.log(result)})
                .catch(err=>{res.status(500).send(err)});}
                
                res.send({Request : data});
            }
            console.log(emailvar)
        })
        .catch(err=>{res.status(500).send(err)})
    }

    // update profile user 

        exports.updateProfileuser = (req,res , next)=>{
             
         
            console.log(emailvar)

        users.findOneAndUpdate({email : emailvar } , { profile :"tutor"})
        .then(data=>{console.log("ok") ;})
        .catch(err=>{res.status(500).send(err)})

         requests.findByIdAndUpdate(req.params.id , {treat : true })
         .then(data=>{ console.log(data)})
         .catch(err=>{res.status(500).send(err)});
     
    }


    // get userss
     exports.getusers = (req,res , next)=>{
        users.find()
        .then(data =>{
    
            res.send ( {users : data }) 
        })
        .catch(err=>{
        res.status(500).send(err)
        }) 
    }

    // post user

    exports.postuser = (req,res , next)=>{
        const user = new users (req.body)
    
        user.save(user)
        .then(data =>{
            res.send(data) 
        })
        .catch(err=>{
        res.status(500).send(err)
        }) 
    }

    exports.getaddcourse = (req,res , next)=>{
        res.render("add_course.ejs",{error: error});
    }


    //account 
    exports.accountUser = (req,res,next)=>{
        res.send({user : user })
     }


     exports.logout = (req,res,next)=>{
        login = false ;
        user = {}
        res.send("logout")
      
       }