// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59aedb6f887dd3cb0189c2b7')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, null, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({ name: 'Andy' }).toArray().then((users) => {
    console.log(JSON.stringify(users, null, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  })
  // db.close();
});