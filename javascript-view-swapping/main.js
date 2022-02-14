var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleViewSwap);

function handleViewSwap(event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabs.length; i++) {
    if ($tabs[i] === event.target) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');

  for (var j = 0; j < $views.length; j++) {
    if ($views[j].getAttribute('data-view') !== viewName) {
      $views[i].className = 'view hidden';
    } else {
      $views[i].className = 'view';
    }
  }

}
