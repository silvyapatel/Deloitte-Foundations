const express= require('express');
const mongoose= require('mongoose');
const User=require('./models/user');
const app=express();
const port=3000;

app.use(express.json());
const mongoURI="mongodb+srv://silvya:11T-parad1s3@cluster0.5gcf0.mongodb.net/db?retrywrites=true&w=majority";

mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("mongodb connected"))
    .catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send("connected to mongoDB");
});


app.get('/api/userInfo',async(req,res)=>{
    try{
       const users= await User.find();
       res.json(users);
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/api/userInfo',async(req,res)=>{
    try{
       const userData= req.body;
       const usr= await User.create(userData); 
       res.status(201).json(usr);
    }
    catch(err){
        res.status(500).send(err);
    }
});

                                                    
app.listen(port,()=>{
    console.log(`sever started on ${port}`)
});