angular.module("app")
.controller("RecordsCtrl", function($scope,$stateParams,recordsFactory) {
  console.log($stateParams);
  if($stateParams.server) {
    $scope.data = $stateParams.server;
  }
  else {
    $scope.data = $stateParams.class;
  }
})
