const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("HELLO THERE")
})

app.listen(5000, ()=>{
    console.log("listening on port 5000")
})