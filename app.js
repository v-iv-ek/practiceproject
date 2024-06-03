const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const login=require("./routes/login")
app.use(bodyParser.urlencoded({extended:false}))
app.use(login)
// app.use(messegeRoute)




app.listen(3000)