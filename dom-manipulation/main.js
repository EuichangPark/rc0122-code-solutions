var numTimesClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
var $button = document.querySelector('button');

$button.addEventListener('click', function (event) {
  numTimesClicked++;
  $clickCount.textContent = 'Clicks: ' + numTimesClicked;
  if (numTimesClicked < 4) {
    $hotButton.className = 'cold hot-button';
  } else if (numTimesClicked < 7) {
    $hotButton.className = 'cool hot-button';
  } else if (numTimesClicked < 10) {
    $hotButton.className = 'tepid hot-button';
  } else if (numTimesClicked < 13) {
    $hotButton.className = 'warm hot-button';
  } else if (numTimesClicked < 16) {
    $hotButton.className = 'hot hot-button';
  } else {
    $hotButton.className = 'nuclear hot-button';
  }
});
