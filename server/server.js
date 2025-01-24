const express = require("express")
const app=express();

const cors=require("cors")

const corsoptions={

    origin:["http://localhost:5173"],

}
app.use(cors(corsoptions))

app.get("/api",(req,res)=>{

    res.json({"bro":["Adya","kunal","rohit","siddhi","riddhiThik","gauri bhatkar","Akshata naik"]})

})

app.listen(5000,()=>{

    console.log("server is started!.....");
    
})



