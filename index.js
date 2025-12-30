const express = require("express");
const app = express();
const data = require("./data.json");

app.get("/api/userlist",(req,res) => {
    res.json(data);
});

app.set('view engine','pug');
app.set('views','./views');

app.get("/html/userlist",(req,res) => {
    res.render("index",{users:data});
});

app.listen(3000, ()=>{
    console.log("server running at port 3000");
});










