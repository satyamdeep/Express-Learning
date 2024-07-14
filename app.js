const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = 7000;
const app = express();



//View engine
const viewPath = path.join(__dirname, "views");
const partialsPath = path.join(__dirname, "views/partials");
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);



//Server
app.listen(port, ()=>{
    console.log("Server is running on port ", port)
});


app.get("/", (req, res)=>{
    res.render("index",{
        page : "Home"
    })
    });



  app.get("/country", (req, res)=>{
    res.render("country",{
        page : "Country"});
  })  

    app.get("/about", (req, res)=>{
        res.render("about", {
            page : "About"
        })
        });

