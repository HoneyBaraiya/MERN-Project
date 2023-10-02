class product{
    async getProduct(callback){
        console.log("came in product");
        var data=await fetch('http://dummyjson.com/products');
       
       console.log(result)
        if(result){
            callback(null,result);
        }
        else{
            callback({status:404},null);
        }
    }
}
        
module.exports=product;