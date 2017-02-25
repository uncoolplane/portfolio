angular.module('rich', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',
    {
        url: '/'
    })
    .state('skills',
      {
          url: '/skills',
          templateUrl: 'skills/skills.html'
      })
      .state('projects',
      {
        url: '/projects',
        templateUrl:'projects/projects.html'
      })
      .state('tools',
      {
        url: '/tools',
        templateUrl:'tools/tools.html'
      })
      .state('journey',
      {
        url: '/journey',
        templateUrl:'journey/journey.html'
      })
    .state('settings',
      {
          url: '/settings',
          templateUrl: 'settings/settings.html'
      });

      $urlRouterProvider.otherwise('/');
})
