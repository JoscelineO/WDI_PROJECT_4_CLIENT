angular
 .module('moodboardApp')
 .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.register = () => {
    User.register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('moodboardsNew');
    }, err => {
      console.log(err);
    });
  };
}
