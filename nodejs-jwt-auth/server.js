const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const app=require("./app")
const port=process.env.PORT || 3004
app.listen(port,()=>{
    console.log("server running in the port",port)
})