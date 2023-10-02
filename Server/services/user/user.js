const userModel=require("../../model/user");

class user{

    async user_exist(email,callback){
        const data=await userModel.findOne({email})
        if(data)
            callback(null,true)
        else    
            callback(null,false);
    }
    async user_signup(userData,callback){
        let newUser=new userModel(userData);
        await newUser.save()
        .then((res)=>{
            callback(null,res);
        })
        .catch((err)=>{
            console.log("user registration prob:",err);
            callback(err,null);
        })
    }
    async user_signin(userData,callback){
        const data=await userModel.findOne({email:userData.email,password:userData.password});
        if(data)
            callback(null,data);
        else    
            callback({satus:400},null)
    }
}

module.exports=user;

