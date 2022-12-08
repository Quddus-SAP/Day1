const express = require('express')
const path = require('path')
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})

app.get("/product/:id", (req, res) => {
    
})

app.listen("3000", (req, res) => {
    console.log("Express is listing on 30000")
})