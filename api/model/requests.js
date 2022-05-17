const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    author :{
        type: String,
        required: true,
       
    },
    courses :{
        type: String,
        required: true
    },

    result: {
        type: Number,
        required:true
    }  ,
    motivation: {
        type: String,
        required:true
    }
    ,
    view :  {
        type: Boolean,
        required:true
    } ,

    treat : {
        type: Boolean,
        required:true
    }
})

const requests = mongoose.model('requests',schema);

module.exports= requests;