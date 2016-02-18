angular.module("app")
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/"); // Catch-all
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "app/components/records/records.template.html",
      controller: "HomeCtrl"
    })
    .state('server', {
      url: "/server/:server",
      templateUrl: "app/components/records/records.template.html",
      controller: "RecordsCtrl"
    })
    .state('byclass', {
      url: "/class/:class",
      templateUrl: "app/components/records/records.template.html",
      controller: "RecordsCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "app/components/about/about.html"
    })
    .state('byname', {
      url: "/name/:name",
      templateUrl: "app/components/records/records.template.html",
      controller: "RecordsCtrl"
    });
});
