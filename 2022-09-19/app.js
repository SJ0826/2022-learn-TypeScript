// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios // 함수가 실행되면 http API를 호출한다. axios는 통신기능을 제공하는 라이브러리.
    .get(url)
    .then(function (response) {
      //console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
