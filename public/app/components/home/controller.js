angular.module("app")
.controller("HomeCtrl", function($scope,recordsFactory) {
  recordsFactory.getAll().then(function(response) {
    $scope.data = response;
    console.log(typeof response.DPS[5].amount);
    // console.log(response);
  });
})
