angular
  .module('moodboardApp')
  .controller('MoodboardsNewCtrl', MoodboardsNewCtrl);

MoodboardsNewCtrl.$inject = ['$state', 'User', 'Moodboard', 'CurrentUserService'];

function MoodboardsNewCtrl($state, User, Moodboard, CurrentUserService) {
  const vm           = this;
  vm.user            = CurrentUserService.currentUser;
  vm.moodboardCreate = moodboardCreate;

  function moodboardCreate() {
    Moodboard
      .save({ moodboard: { project_name: vm.moodboard.project_name, brief: vm.moodboard.brief, user_id: vm.user.id }})
      .$promise
      .then(() => {
        $state.go('moodboardsIndex');
      });
  }
}
