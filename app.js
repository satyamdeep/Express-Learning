const express = require("express");
const port = 5000;
const app = express();



//View engine
app.set("view engine", "hbs");



//Server
app.listen(port, ()=>{
    console.log("Server is running on port ", port)
});


app.get("/", (req, res)=>{
    res.render("index",{
        page : "Home"
    })
    });

    app.get("/about", (req, res)=>{
        res.render("about", {
            page : "About"
        })
        });

// app.get("/", (req, res)=>{
// res.send("Hello World")
// });