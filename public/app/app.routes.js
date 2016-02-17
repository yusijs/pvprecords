angular.module("app")
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "app/components/home/view.html",
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
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
