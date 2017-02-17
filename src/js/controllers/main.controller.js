angular
  .module('moodboardApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    CurrentUserService.getUser() //calls current-user-service
    .then(data => {
      vm.user = data;
      $state.go('usersIndex'); // when logged in take us to users index
    }, err => {
      console.log(err);
    });
  });
}
