import express from "express"
const app = express()
app.get("/",(req,res)=>{
res.send("auto deploying working ")
})
app.listen(3000,()=>{
console.log("server is runnig on port 30000")})
