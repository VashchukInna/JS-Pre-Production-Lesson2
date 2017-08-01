var users = require('./user');
var john = users.createUser('John');
var smith = users.createUser('Smith');

var lodash = require('lodash');

console.log(lodash.VERSION);

users.showUsersList();
console.log(users.getUserById(5));

users.getUserByName();
console.log(users.getUserByName('Joel'));