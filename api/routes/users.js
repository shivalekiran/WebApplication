var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

var DbController = require("./controller/mongocontroller");
const MongoClient = require('mongodb').MongoClient;


/// database name
const DATABASE_NAME = 'mydb';
var DATABASE;
//connection url to localhost
const client = new MongoClient('mongodb://localhost:27017');

/* GET users listing. */
router.post('/', function (req, res, next) {
  client.connect(function (err) {
    if (err) {
      console.log(err);
      res.send("Error to get data");
      return;
    }
    console.log('connected');
    DATABASE = client.db(DATABASE_NAME);
    let item = req.body.item;
    var id = ObjectId(item._id);
    console.log("id:" + id)
    var myquery = { _id:  id}
    DbController.deletebyFilete(
      DATABASE,
      myquery,
      function dbdata(dbdata) {
        console.log("delted:" + dbdata);
        res.send(JSON.stringify(dbdata));
      }
    );
  });

});

module.exports = router;
