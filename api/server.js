const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const middleware = require ("./controller/middleware")

dotenv.config({path:'config.env'});
const url= process.env.MONGO_URI
const PORT = process.env.PORT || 3000

mongoose.connect(url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const  app= express();

app.use(express.static('public'))
app.set('view engine','ejs')


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));



app.use('/api/courses'  , require('./routes/routerCourses'));
app.use('/api/requests' , require('./routes/routerRequests'));
app.use('/api/users' , require('./routes/routerUsers'));

//welcome page
app.get('/' , (req,res)=>{
    
 res.render("index")
});


app.route('/account')
.get(middleware.accountUser)


// login
app.route("/api/login")
.get(middleware.getlogin)

.post(middleware.identification)


 app.get("/api/logout",middleware.logout)

 
app.get("/api",(req,res)=>
{
  res.send({hello : ["hello"]})
})
 



 
////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////

app.listen(PORT);
