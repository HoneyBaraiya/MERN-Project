const {model,Schema} = require('mongoose');

const userSchema=new Schema({
    name:{
        type:"String",
        required:true
    },
    mobile:{
        type:"Number",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"string",
        required:true
    },
    cpassword:{
        type:"string",
        required:true
    }
});
module.exports=model('User',userSchema);