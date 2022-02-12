var $spans = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', function letters(e) {
  if ($spans[i].textContent === e.key) {
    $spans[i].className = 'right border-bottom';
    i++;
  } else {
    $spans[i].className = 'wrong border-bottom';
    i = i + 0;
  }
});
