angular.module("app")
.controller("RecordsCtrl", function($scope,$stateParams,recordsFactory) {
  $scope.server = $stateParams.server;
})
