const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT ||5000;
const signup=require("./routes/signup");
const login =require("./routes/login");
const edit =require("./routes/edit");
const owner=require("./routes/owner");
const path= require('path');

app.use(morgan("dev"));
app.use(cors()); 
app.use(express.json()); 

app.use((req, res, next) => {
    console.log("incoming request");
    next();
  });


app.use('/signup',signup);
 app.use('/login',login);
 app.use('/edit',edit);
 app.use('/user',owner);

if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname +'build')));
app.get('/*',(req,res) =>{
  req.sendFile(path.join(__dirname,'build', 'index.html'));
})
}

app.listen(PORT, console.log(`listening at: http://localhost:${PORT}`));
