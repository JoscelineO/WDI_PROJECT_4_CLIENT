angular
  .module('moodboardApp')
  .controller('MoodboardsIndexCtrl', MoodboardsIndexCtrl);

MoodboardsIndexCtrl.$inject = ['Moodboard', 'User', 'CurrentUserService', '$state'];

function MoodboardsIndexCtrl(Moodboard, User, CurrentUserService, $state) {
  const vm = this;

  Moodboard
    .query()
    .$promise
    .then(data => {
      vm.moodboards = data.filter(board => {
        if (board.user.id === CurrentUserService.currentUser.id) return board;
      });
    });

  vm.delete = function(moodboard) {
    Moodboard
      .delete(moodboard.id)
      .$promise
      .then(() => {
        $state.go('moodboardsIndex');
      });
  };

}
