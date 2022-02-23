var $countdownDisplay = document.querySelector('.countdown-display');
var counter = 4;
var intervalID = setInterval(function () {
  counter--;
  $countdownDisplay.textContent = counter;
  if (counter === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1000);
