var $focus = document.querySelector('#user-name');
console.log($focus);
$focus.addEventListener('focus', function (event) {
  console.log('focus event fired');
  console.log(event.target.name);
});

var $blur = document.querySelector('#user-email');
console.log($blur);
$blur.addEventListener('blur', function (event) {
  console.log('blur event fired');
  console.log(event.target.name);
});

var $input = document.querySelector('#user-message');
console.log($input);
$input.addEventListener('input', function (event) {
  console.log(event.target.name, event.target.value);
});
