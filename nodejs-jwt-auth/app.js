const express=require("express")
const jwtRouter=require("./routes/jwtRoutes")
const app=express()
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
credentials:true,          
    optionSuccessStatus:200
}
console.log("sameport",process.env.port)
app.use(cors(corsOptions));
app.use(express.json())
app.use("/auth",jwtRouter)
module.exports=app