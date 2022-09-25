var user = {name:'capt', age: 100};

var admin = {};

admin.__proto__ = user;

console.log(admin.name);