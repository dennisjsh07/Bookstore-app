const express = require("express");
const app = express();
const port = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.send("Hello world");
});

app.listen(port, ()=>{
    console.log("app running on port 5000")
})