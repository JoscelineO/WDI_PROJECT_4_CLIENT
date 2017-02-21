angular
  .module('moodboardApp')
  .controller('MoodboardsIndexCtrl', MoodboardsIndexCtrl);

MoodboardsIndexCtrl.$inject = ['Moodboard'];

function MoodboardsIndexCtrl(Moodboard) {
  const vm = this;

  Moodboard
  .query()
  .$promise
  .then(data => {
    vm.moodboards = data;
  });
}
