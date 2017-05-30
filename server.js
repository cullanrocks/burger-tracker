// DEPENDENCIES -------------------------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('app/public/'));
app.use(express.static(__dirname + '/public'));

// Allows us to overide PUT and GET methods
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Brings in the routes URLs from our controllers
var routes = require("./controllers/burgers_controller.js")
app.use("/", routes);


// Tells the app to listen to our port
app.listen(PORT, function(){
	console.log(`App listening on PORT ${PORT}.`)
})