const express=require('express');
const router=express.Router();
const userControll=require("../controller/user/user_auth");
const productControll=require("../controller/product/product");

router.get("/",(req,res)=>{
    res.status(200).send("Hello world from router"); 
})

router.post("/signup",userControll.user_signup)
router.post("/signin",userControll.user_signin);

router.get("/product",productControll.getProduct);
module.exports=router;