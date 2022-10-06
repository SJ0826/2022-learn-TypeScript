// function fetchData() {
//   var user = $.ajax('users/1', function(user) {
//     console.log(user);
//   });
//   console.log(user);
// }

async function fetchData() {
  var user = await $.ajax('user/1');
  console.log(user);
}


var a = 10;
console.log(a);
var sum = a * 2;
console.log(sum);