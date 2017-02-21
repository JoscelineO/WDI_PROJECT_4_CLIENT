angular
.module('moodboardApp')
.controller('MoodboardsShowCtrl', MoodboardsShowCtrl);

MoodboardsShowCtrl.$inject = ['Moodboard', '$state', '$stateParams', 'Asset'];

function MoodboardsShowCtrl(Moodboard, $state, $stateParams, Asset) {
  const vm = this;

  vm.moodboard = Moodboard.get($stateParams);

  showAssets();

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
      console.log('done');
      showAssets();
    });
  };

  function showAssets() {
    Asset
    .query()
    .$promise
    .then(data => {
      vm.asset = data;
      console.log(vm.asset);
      // $state.go('moodboardsShow');
    });
  }

}
