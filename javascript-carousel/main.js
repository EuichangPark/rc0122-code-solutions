var $img = document.querySelector('img');
var $container = document.querySelector('.container');
var currentImage = 0;
var imgArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
$container.addEventListener('click', changeImage);
function changeImage(event) {
  if (event.target.className === 'far fa-circle') {
    currentImage = parseInt(event.target.getAttribute('data-view'));
    $img.setAttribute('src', imgArray[currentImage]);
    change();
  }
}

var $rightBtn = document.querySelector('.fa-angle-right');
$rightBtn.addEventListener('click', nextImage);
function nextImage() {
  currentImage++;
  if (currentImage >= imgArray.length) {
    currentImage = 0;
  }
  change();
}

var $leftBtn = document.querySelector('.fa-angle-left');
$leftBtn.addEventListener('click', previousImage);
function previousImage(event) {
  currentImage--;
  if (currentImage < 0) {
    currentImage = imgArray.length - 1;
  }
  change();
}

var $icons = document.querySelectorAll('[data-view]');
function changeCircle() {
  for (var i = 0; i < $icons.length; i++) {
    $icons[i].className = 'far fa-circle';
    if (currentImage === i) {
      $icons[i].className = 'fas fa-circle';
    }
  }
  clearInterval(interval);
  interval = setInterval(nextImage, 3000);
}

var interval = setInterval(nextImage, 3000);

function change() {
  $img.setAttribute('src', imgArray[currentImage]);
  changeCircle();
}
