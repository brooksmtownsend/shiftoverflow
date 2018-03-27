const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var data = require('./currentSchedule.json');
data = data['shifts']

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  assert.equal(null, err);
  console.log('Connected successfully')
  const db = client.db('shiftoverflow');
  // Uncomment lines below when schedule is updated
  //deleteData(db);
  //insertData(db, data);
  client.close();
})

let insertData = (db, data) => {
  let schedule = db.collection('schedule');
  for (let days = 0; days < 7; days++) {
    for (let hours = 0; hours < 24; hours++) {
      for (let onyens = 0; onyens < data[days][hours]['onyens'].length; onyens++) {
        schedule.insertOne({
          day: days,
          hour: hours,
          onyen: data[days][hours]['onyens'][onyens] 
        });
        console.log(data[days][hours]['onyens'][onyens])
      }
    }
  }
}

let deleteData = (db) => {
  db.collection('schedule').deleteMany({});
}
