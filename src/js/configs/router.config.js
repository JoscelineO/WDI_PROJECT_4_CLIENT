angular
.module('moodboardApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  // .state('moodboards', {
  //   url: '/moodboards',
  //   templateUrl: '/js/views/moodboards/new.html',
  //   controller: 'MoodboardsIndexCtrl',
  //   controllerAs: ''
  // })
  .state('moodboardsNew', {
    url: '/moodboards/new',
    templateUrl: '/js/views/moodboards/new.html',
    controller: 'MoodboardsNewCtrl',
    controllerAs: 'moodboardsNew'
  });

  $urlRouterProvider.otherwise('/');
}
