//get service
const userService=require("../../services/user/user");
var userAuthObj=new userService();

exports.user_signup=async(req,res)=>{
    try{
        if(req.body.password===req.body.cpassword){
            userAuthObj.user_exist(req.body.email,function(err,userExist){
                if(err){
                    res.status(400).send(`error in controller...${err}`)
                }
                else{
                    if(userExist)
                        res.status(400).send("user already exist");
                    else{
                        userAuthObj.user_signup(req.body,function(err,data){
                            if(err)
                                res.status(400).send(`error in controller...${err}`)
                            else    
                                 res.status(200).send(`user register successfully!`);
                        })
                    }
                }
            })
        }
        else{
            res.status(400).send("password and confirm password mismatched!!")
        }
       
    }
    catch(err){
        console.log("error in crontroller..",err);
    }
}

exports.user_signin=async(req,res)=>{
    try{
        if(req.body.email && req.body.password){
            userAuthObj.user_signin(req.body,function(err,data){
                if(data)
                    res.status(200).send("user login successfully!");
                else
                    res.status(400).send("email or password are wrong!");
            })
        }
        else{
            res.status(400).send("email and password required"); 
        }
    }
    catch(err){
        res.status(400).send(err);
    }
}