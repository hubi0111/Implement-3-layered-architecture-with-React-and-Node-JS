var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var dbname = 'organization';

router.get('/', function (req, res, next) {
    console.log('get called')
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db(dbname);
        var collection = db.collection('organizations');
        collection.find({}).toArray((err, docs) => {
            res.send(docs);
        });
    });
});

router.post('/', function (req, res) {
    console.log('post called');
    MongoClient.connect(url, (err, client) => {
        var db = client.db(dbname);
        var collection = db.collection('organizations');
        collection.insertOne({ "name": req.body.name, "address": req.body.address, "type": req.body.type }, (err, result) => {
            console.log('After Insert');
            collection.find({}).toArray((err, docs) => {
                console.log(docs);
            });
        });
    });
});

module.exports = router;