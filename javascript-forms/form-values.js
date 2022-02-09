var $theForm = document.querySelector('#contact-form');
console.log($theForm);
$theForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = $theForm.elements.name.value;
  messageData.email = $theForm.elements.email.value;
  messageData.message = $theForm.elements.message.value;
  console.log(messageData);
  $theForm.reset();
});
