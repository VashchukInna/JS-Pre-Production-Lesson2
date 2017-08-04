var generateId = require('../generate_id.js');
var usersList = require('./users.json');
var users = createUserListWithId(usersList);

function createUserListWithId(list) {
    var result = [];
    var newItem;
    for (var i = 0; i < list.length; i++) {
        newItem = createUser(list[i].name);
        result.push(newItem);
    }
    return result;
}

function createUser(name) {
    return {
        name: name,
        id: generateId()
    }
}

function showUsersList() {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

function getUserById(ID) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === ID) {
            return users[i];
        }
    }
    return "NO USER";
}

function getUserByName(name) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            return users[i];
        }
    }
    return null;
}

module.exports = {
    createUser: createUser,
    showUsersList: showUsersList,
    getUserById: getUserById,
    getUserByName: getUserByName
};