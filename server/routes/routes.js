/**
 * Created by Michal Wozniak on 1/23/2016.
 */
'use strict';
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var config = require('./../config');
var rootDirectoryPath = {root: __dirname + '/../../'};
//var client = require('./../../server');
//var Clarifai = require('clarifai');
//
//
//var client = new Clarifai({
//    id: config.clarifai.id,
//    secret: config.clarifai.secret
//});
var client = require('./../clarifaiClient');


router.get('/', function (req, res, next) {
    res.sendFile('/public/index.html', rootDirectoryPath);
});


router.post('/upload',upload.any(),function (req, res, next) {
    console.dir(req.headers['content-type']);
    console.log(req.body,req.body.profileimage,req.file);
    res.end();

});

router.post('/test',function (req, res, next) {
    console.log(req.body);
    var imageURL = req.body.imageURL;
    client.tagFromUrls('image', imageURL, function(err, results) {
        console.log(err);
        console.log(results);
        var result = {
            'tags' : results.tags
        };
        res.send(result);
    }, null);
});

module.exports = router;