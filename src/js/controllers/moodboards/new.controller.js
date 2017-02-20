angular
  .module('moodboardApp')
  .controller('MoodboardsNewCtrl', MoodboardsNewCtrl);

MoodboardsNewCtrl.$inject = ['$state', 'User', 'Moodboard'];

function MoodboardsNewCtrl($state, User, Moodboard) {
  const vm           = this;
  vm.moodboardCreate = moodboardCreate;
  function moodboardCreate() {
    Moodboard
      .save(vm.moodboard);
  }
}
