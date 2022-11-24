const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=3000

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("server is started")
})
app.post("/newData",(req,res)=>{
	//const name=req.body.name
	const {name,password}=req.body
	console.log(name,password)
	res.send("Added data")
})
app.listen(port,()=>console.log("server is running on port 3000"))
