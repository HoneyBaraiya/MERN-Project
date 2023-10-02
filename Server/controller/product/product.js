const productService=require("../../services/products/product");
var productObj=new productService();

exports.getProduct=async(req,res)=>{
    try{
        productObj.getProduct(function(err,data){
            if(err){
                res.status(400).send("no data found");
            }
            else{
                if(data){
                    res.status(200).send(data);
                }
            }
        })
    }
    catch(err){
        res.status(400).send(err)
    }
}