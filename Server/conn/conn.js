const mongoose=require('mongoose');

const DB=process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("connection with DB Successfully!");
})
.catch((err)=>{
    console.log(`Error in Db connection ${err}`);
})