angular
.module('moodboardApp')
.controller('MoodboardsShowCtrl', MoodboardsShowCtrl);

MoodboardsShowCtrl.$inject = ['Moodboard', '$state', '$stateParams', 'Asset'];

function MoodboardsShowCtrl(Moodboard, $state, $stateParams, Asset ) {
  const vm = this;

  vm.moodboard = Moodboard.get($stateParams);

  vm.delete = function moodboardDelete() {
    Moodboard
    .delete($stateParams)
    .$promise
    .then(() => {
      $state.go('moodboardsIndex');
    });
  };

  vm.addAsset = function addAsset() {
    Asset
    .save({ asset: { url: vm.asset.url, moodboard_id: vm.moodboard.id }})
    .$promise
    .then(() => {
      $state.go('moodboardsShow');
      console.log('done');
    });
  };

  // target elements with the "draggable" class
  interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: 'parent',
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener

  });

  function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    vm.xValue = x.toFixed();
    vm.yValue = y.toFixed();
  }

  vm.updateAsset = function(asset) {
    asset.x_position = vm.xValue;
    asset.y_position = vm.yValue;

    console.log(asset);

    Asset
    .update({ id: asset.id }, asset)
    .$promise
    .then(data => {
      console.log('ASSET SAVED', data);
    });

  };

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

}
