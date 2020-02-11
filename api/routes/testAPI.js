var express = require("express");
var ObjectId = require('mongodb').ObjectID;
const shortid = require('shortid');
var router = express.Router();
var DbController = require("./controller/mongocontroller");
const MongoClient = require('mongodb').MongoClient;


/// database name
const dbName = 'mydb';
var db;

//URl 
var URL = 'mongodb://localhost:27017';
//connection url to localhost
const client = MongoClient('mongodb://localhost:27017');

router.get("/", function (req, res, next) {
    client.connect(function (err) {
        if (err) {
            console.log(err);
            res.send("Error to get data");
            return;
        }
        console.log('connected');
        db = client.db(dbName);
        DbController.get_data(
            db,
            function dbdata(dbdata) {
                res.send(JSON.stringify(dbdata));
            }
        );
    });
});

router.post("/", function (req, res, next) {
    client.connect(function (err) {
        if (err) {
            console.log(err);
            res.send("Error to get data");
            return;
        }
        console.log('connected');
        db = client.db(dbName);
        var items = req.body.items;
        console.log("Items: "+ JSON.stringify(items));
        
        // if(!req.body.name || !req.body.lastname || !items.length > 0){
        //     res.send(JSON.stringify({"mesaage":"request params missing"}));
        //     return;
        // }
        DbController.insert_many_document(
            db,
            items,            
            function (dbdata) {
                res.send(JSON.stringify(dbdata));
            }
        );
    });
});

module.exports = router;