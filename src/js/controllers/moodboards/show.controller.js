angular
.module('moodboardApp')
.controller('MoodboardsShowCtrl', MoodboardsShowCtrl);

MoodboardsShowCtrl.$inject = ['Moodboard', '$state', '$stateParams', 'Asset', '$http', '$document'];

function MoodboardsShowCtrl(Moodboard, $state, $stateParams, Asset, $http, $document ) {
  const vm = this;
  vm.moodboard = Moodboard.get($stateParams);

  vm.addAsset = function addAsset() {

    vm.asset.x_position   = 0;
    vm.asset.y_position   = 0;
    vm.asset.moodboard_id = vm.moodboard.id;
    vm.asset.height       = parseInt(vm.asset.width);
    vm.asset.width        = parseInt(vm.asset.width);


    Asset
    .save(vm.asset)
    .$promise
    .then(data => {
      vm.moodboard.assets.push(data);
      $state.go('moodboardsShow', {id: vm.moodboard.id});
    });
  };

  // vm.unSplash = function unSplash() {
  //   $http
  //     .get('https://api.unsplash.com/photos/random/?client_id=c954890ee40b178bcc03ad013e87bea83157720eb43b37a577d7493e3d0eaddc')
  //     .then(response => {
  //       vm.image = (response.data.urls.small);
  //     });
  // };
  //
  // vm.addToUrl = function addToUrl() {
  //   vm.image_url = vm.image;
  // };

  vm.convertString = function() {
    const dropdown      = $document[0].querySelector('.singleSelect');
    const dropdownValue = dropdown.options[dropdown.selectedIndex].value;

    vm.asset.width = parseInt(dropdownValue);

    console.log(vm.asset.width);
  };

  vm.deleteAsset = function assetDelete(assets) {
    if(confirm('Are you sure you want to delete this asset?')){
      Asset
      .delete({id: assets.id})
      .$promise
      .then(() => {
        vm.moodboard.assets.splice(vm.moodboard.assets.indexOf(assets), 1);
      });
    }
  };


  // target elements with the "draggable" classs
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
    x = (parseFloat(target.getAttribute('data-x'))) + event.dx,
    y = (parseFloat(target.getAttribute('data-y'))) + event.dy;

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
    asset.x_position = vm.xValue || asset.x_position;
    asset.y_position = vm.yValue || asset.y_position;

    Asset
    .update({ id: asset.id }, asset)
    .$promise
    .then(data => {
      vm.xValue = 0;
      vm.yValue = 0;
    });

  };

}































// this is used later in the resizing and gesture demos
// window.dragMoveListener = dragMoveListener;



// interact('.resize-drag')
// .draggable({
//   onmove: window.dragMoveListener
// })
// .resizable({
//   preserveAspectRatio: true,
//   edges: { left: true, right: true, bottom: true, top: true }
// })
// .on('resizemove', function (event) {
//   var target = event.target,
//       x = (parseFloat(target.getAttribute('data-x')) || 0),
//       y = (parseFloat(target.getAttribute('data-y')) || 0);
//
//   // update the element's style
//   target.style.width  = event.rect.width + 'px';
//   target.style.height = event.rect.height + 'px';
//
//   // translate when resizing from top or left edges
//   x += event.deltaRect.left;
//   y += event.deltaRect.top;
//
//   // target.style.webkitTransform = target.style.transform =
//       'translate(' + x + 'px,' + y + 'px)';
//
//   target.setAttribute('data-x', x);
//   target.setAttribute('data-y', y);
// });
