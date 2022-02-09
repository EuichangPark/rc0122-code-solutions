var numTimesClicked = 0;
var $backGround = document.querySelector('.background');
var $lightBulb = document.querySelector('.bulb');

$backGround.addEventListener('click', function (event) {
  numTimesClicked++;
  if (numTimesClicked % 2 === 1) {
    $backGround.className = 'background-off background';
    $lightBulb.className = 'bulb-off bulb';
  } else {
    $backGround.className = 'background';
    $lightBulb.className = 'bulb';
  }
});
