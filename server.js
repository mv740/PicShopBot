/**
 * Created by Michal Wozniak on 1/23/2016.
 */
"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./server/routes/routes');
var config = require('./server/config');

var fs = require('fs');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// set the static files location
app.use('/public', express.static(
    __dirname + '/public',
    {
        extensions: ['html']
    }));

//route ==============================================================
app.use('/', routes);

//start app ===========================================================

// HTTP server
app.listen(process.env.PORT || 8080, function () {
    console.log("Server started");
});