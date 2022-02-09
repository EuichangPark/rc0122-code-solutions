var $userName = document.querySelector('#user-name');
console.log($userName);
$userName.addEventListener('focus', function (event) {
  console.log('focus event fired');
  console.log(event.target.name);
});

$userName.addEventListener('blur', function (event) {
  console.log('blur event fired');
  console.log(event.target.name);
});

$userName.addEventListener('input', function (event) {
  console.log(event.target.name, event.target.value);
});

var $userEmail = document.querySelector('#user-email');
console.log($userEmail);
$userEmail.addEventListener('blur', function (event) {
  console.log('blur event fired');
  console.log(event.target.name);
});

$userEmail.addEventListener('focus', function (event) {
  console.log('focus event fired');
  console.log(event.target.name);
});

$userEmail.addEventListener('input', function (event) {
  console.log(event.target.name, event.target.value);
});

var $userMessage = document.querySelector('#user-message');
console.log($userMessage);
$userMessage.addEventListener('input', function (event) {
  console.log(event.target.name, event.target.value);
});

$userMessage.addEventListener('blur', function (event) {
  console.log('blur event fired');
  console.log(event.target.name);
});

$userMessage.addEventListener('focus', function (event) {
  console.log('focus event fired');
  console.log(event.target.name);
});
