const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email :{
        type: String,
        required: true,
        unique:true
     
    },
    password:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    } ,

    courses : [] ,
    profile :  {
        type: String,
        required:true
    },
    tutor_courses : [] ,
    
    
})

const users = mongoose.model('users',schema);

module.exports= users;