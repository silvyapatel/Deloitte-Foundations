const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    "id":{
        type:String,
        unique:true
    },
    "name":{
        type:String,
        require:true
    },
    "email":{
        type:String,
        require: true
    }
});

module.exports=mongoose.model('user',userSchema);