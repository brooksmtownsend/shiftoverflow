const express = require('express')
const app = express()
const path = require('path')
const port = 8080
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
/*
 * BEGIN MONGODB DATABASE FUNCTIONS
 */
const url = 'mongodb://localhost:27017';
// Needed to query database with HTTP Requests
var database;

const insertDocuments = function(db, callback) {
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
}

const findDocuments = function(db, callback) {
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

const insertUsers = (db, callback) => {
  const collection = db.collection('users');
  collection.insertMany([
    {id: 0, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 2, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 3, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 4, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 5, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 6, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 7, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 8, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 9, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 10, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 11, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 12, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
////    {id: 13, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 14, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 15, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 16, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
//    {id: 17, onyen:'brooksmt', firstName:'Brooks', lastName:'Townsend'}
  ], (err, result) => {
     assert.equal(err, null);
  })
}

const deleteSchedule = (db, callback) => {
  const schedule = db.collection('schedule');
  schedule.deleteMany({});
  console.log('Deleted Schedule');
}

const deleteUsers = (db, callback) => {
  db.collection('users').deleteMany({})
  console.log('Deleted users');
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
   assert.equal(null, err);
   console.log("Connected successfully to server");
   const db = client.db('shiftoverflow');
   database = db;
//   insertDocuments(db, function() {
//     findDocuments(db, () => {
//       client.close();
//     });
//   });
});
/*
 * END MONGODB DATABASE FUNCTIONS
 */

/*
 * BEGIN ROUTING / REQUESTS
 */

// Send our home page when people visit our website
app.use('/', express.static(__dirname + '/build/'));
app.get('/', (req, res) => {
  res.sendFile(path.join('index.html'));
});

app.get('/getUserByOnyen/:onyen', (req, res) => {
  let onyen = req.params.onyen;
  database.collection('users').find({}).toArray((err, result) => {
    res.send({
      'onyen': onyen,
      'data': result
    });
  });
});

app.get('/hello', (req, res) => {
  res.send('Hello there');
})

app.get('/availabilities/:onyen', (req, res) => {
  let onyen = req.params.onyen
  // Get availabilites by onyen
  res.send(onyen)
});

app.get('/availabilities/:onyen/:day/:time', (req, res) => {
  let onyen = req.params.onyen
  let day = req.params.day
  let time = req.params.time
  //get availabilities by onyen, day, and time
  res.send(onyen + day + time)
})

app.get('/availabilities/:update/:onyen/:day/:time', (req, res) => {
  let onyen = req.params.onyen
  let day = req.params.day
  let time = req.params.time
  let update = req.params.update// "update" if we should update it. Otherwise do nothing

  //Need to check with helen / brooke about this one. What is the intended purpose?
  //get availabilities by onyen, day, and time
  res.send(onyen + day + time+update)
})

app.get('/availabilities/:deleted/:onyen/:day/:time', (req, res) => {
  let onyen = req.params.onyen
  let day = req.params.day
  let time = req.params.time
  let deleted = req.params.deleted// "delete" if we should update it. Otherwise do nothing

  //Need to check with helen / brooke about this one. What is the intended purpose?
  //get availabilities by onyen, day, and time
  res.send(onyen + day + time + deleted)
})

app.get('/schedule', (req, res) => {
  database.collection('schedule').find({}).toArray((err, docs) => {
    assert.equal(err, null)
    res.send(docs)
  })
})

app.put('/login/:code', (req, res) => {
  let loginCode = req.params.code;
  res.send(loginCode);
})

app.put('/swapShift', (req, res) => {
  res.send(req);
})
// Error checking, send a generic 404 if someone tries to access a different resource
app.get('/*' , (req, res) => {
  res.status(404).send('Resource not found.');
})

/*
 * END ROUTING / REQUESTS
 */

// Listen on port (8080 default) for connections.
app.listen(port, '172.31.81.176');
