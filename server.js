var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import the html routes
var api = require("./app/routing/apiRoutes");
var html = require("./app/routing/htmlRoutes");

api(app);
html(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});