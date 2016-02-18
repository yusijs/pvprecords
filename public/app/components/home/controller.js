angular.module("app")
.controller("HomeCtrl", function($scope,recordsFactory) {
  recordsFactory.getAll().then(function(response) {
    $scope.data = response;
  });
})
