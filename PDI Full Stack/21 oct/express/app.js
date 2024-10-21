const express= require('express');
const mongoose= require('mongoose');
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

app.get('/api/users',(req,res)=>{
    const users=[{
        "name":"silvya",
        "age":21
    },
    {
        "name":"tirth",
        "age":21
    }];
    res.json(users);
})

app.listen(port,()=>{
    console.log(`sever started on ${port}`)
});