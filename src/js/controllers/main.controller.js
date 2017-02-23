angular
.module('moodboardApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', '$scope'];
function MainCtrl($rootScope, CurrentUserService, $state, $scope) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  $scope.hoverIn = function(){
    this.toggle = true;
  };

  $scope.hoverOut = function(){
    this.toggle = false;
  };
}
