const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoos');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '59afef4fe81e04f409be4a2411';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found!');
//     }
//     console.log('Todo by id:', todo);
//   }).catch(e => console.log(e));

var userId = '59afbe440b9fde801421c355';
User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User by id:', user);
  }, (e) => {
    console.log(e)
  });