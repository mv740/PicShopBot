/**
 * Created by Michal Wozniak on 1/23/2016.
 */
"use strict";
var Clarifai = require('clarifai');
var config = require('././config');
function initializeClient()
{
    return new Clarifai({
        id: config.clarifai.id,
        secret: config.clarifai.secret
    });
};

module.exports = initializeClient();