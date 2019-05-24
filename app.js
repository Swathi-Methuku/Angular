var express = require("express");
var app = express();
var sql = require("mssql");
var router = express.Router();
var bodyParser = require('body-parser');
var cors= require('cors');




var userFile = require("./users/user.js");
//var productFile = require("./products/product.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/users", userFile);
//app.use("/product", productFile);

var server = app.listen(8086, function(){
    console.log("server is running");
})