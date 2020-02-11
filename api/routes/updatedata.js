var express = require("express");
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();
var DbController = require("./controller/mongocontroller");
const MongoClient = require('mongodb').MongoClient;


/// database name
const dbName = 'mydb';
var db;


//connection url to localhost
const client = new MongoClient('mongodb://localhost:27017');

router.post("/", function (req, res, next) {
    client.connect(function (err) {
        if (err) {
            console.log(err);
            res.send("Error to get data");
            return;
        }
        console.log('connected');
        console.log("Req body: "+ JSON.stringify(req.body.item));
        db = client.db(dbName);
        if(req.body._id){
            res.send(JSON.stringify({"message":"request paramertes missing"}))
        }
        DbController.update_record(
            db,
            req.body.item,
            function (data) {
                res.send(JSON.stringify(data));
            }
        )
    });
});

module.exports = router;