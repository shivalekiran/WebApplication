const assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;

const COLLCTION_NAME = 'mydocuments';


/// database name
const dbName = 'mydb';
var db;

//URl 
var dbUrl = 'mongodb://localhost:27017';
//connection url to localhost
const client = MongoClient('mongodb://localhost:27017');


function getCollection(db) {
	return db.collection(COLLCTION_NAME);
}
//update_record
exports.update_record = function (db, item, callback) {
	const name = getCollection(db);
	console.log("updating doc: " + JSON.stringify(item));
	var newvalues = {
		$set: {
			name: item.name,
			lastname: item.lastname,
			address: item.address
		}
	};
	let id = ObjectId(item._id);
	console.log("DOC id:" + id);
	var quary = { "_id": id }

	name.updateOne(quary, newvalues, ((err, doc) => {
		const { matchedCount, modifiedCount } = doc;
		if (matchedCount && modifiedCount) {
			console.log('Successfully added a new review.')
			callback(JSON.stringify({ "massege": "doc updated successful" }));
		} else {
			callback(JSON.stringify({ "massega": "error to update doc" }));
		}
	}));
}

//insert_record
exports.update_document = function (db, data, callback) {
	const name = getCollection(db);
	name.updateOne(data, function (err, result) {
		const { matchedCount, modifiedCount } = result;
		if (matchedCount && modifiedCount) {
			console.log('Successfully added a new review.')
			callback(JSON.stringify({ "message": "record updated successful" }));
		} else {
			callback(JSON.stringify({ "error": err }))
		}
	}
	)
}

exports.insert_document = (db, item, callback) => {
	const name = getCollection(db);
	name.insert(
		item,
		function (err, result) {
			callback(result);
		}
	)


}
//insert_many_document
exports.insert_many_document = (db, items, callback) => {
	const name = getCollection(db);
	name.insertMany(
		items,
		function (err, result) {
			callback(result);
		}
	)


}
//get_data
exports.get_data = function (db, callback) {
	const name = getCollection(db);
	var cursor = name.find().toArray(
		function (err, results) {
			callback((results));
		}
	);
}
//delte
exports.deletebyFilete = function (db, obj, callback) {
	console.log(obj);
	const name = getCollection(db);
	name.deleteOne(obj, function (err, obj) {
		if (err) return null;
		callback(obj)
	});
}