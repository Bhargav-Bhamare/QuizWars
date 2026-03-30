const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

//IMP middlewares
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// Demo credentials
const CREDENTIALS = {
  student: { username: 'player1', password: '1234' },
  admin: { username: 'admin', password: 'admin123' }
};

app.get("/", (req,res)=>{
    res.render("landing.ejs");
});

app.get("/stuDash", (req,res)=>{
    res.render("studentDash.ejs");
});

app.get("/qMastDash", (req,res)=>{
    res.render("qMasterDash.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/logout", (req, res) => {
    res.redirect("/");
});

//Server Check
app.listen(8080, () => {
    console.log("Listening to port successfully!");
});