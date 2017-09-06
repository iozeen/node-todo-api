const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoos');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove('59b0119331ce5fa01fa60a7c').then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59b0119331ce5fa01fa60a7c').then((todo) => {
  console.log(todo);
});
