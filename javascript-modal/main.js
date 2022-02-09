var $modal = document.querySelector('.modal');
var $modalBtn = document.querySelector('.my-btn');
var $closeBtn = document.querySelector('.no-button');

$modalBtn.addEventListener('click', openModal);
$closeBtn.addEventListener('click', closeModal);

function openModal() {
  $modal.className = 'modal-block';
}

function closeModal() {
  $modal.className = 'modal';
}
