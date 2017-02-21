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
  .state('moodboardsIndex', {
    url: '/moodboards',
    templateUrl: '/js/views/moodboards/index.html',
    controller: 'MoodboardsIndexCtrl',
    controllerAs: 'moodboardsIndex'
  })
  .state('moodboardsNew', {
    url: '/moodboards/new',
    templateUrl: '/js/views/moodboards/new.html',
    controller: 'MoodboardsNewCtrl',
    controllerAs: 'moodboardsNew'
  })
  .state('moodboardsShow', {
    url: '/moodboards/:id',
    templateUrl: '/js/views/moodboards/show.html',
    controller: 'MoodboardsShowCtrl',
    controllerAs: 'moodboardsShow'
  });

  $urlRouterProvider.otherwise('/');
}
