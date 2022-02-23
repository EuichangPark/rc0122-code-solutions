var $users = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
console.log(xhr);
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var userList = document.createElement('li');
    userList.textContent = xhr.response[i].name;
    $users.appendChild(userList);
  }
});
xhr.send();
