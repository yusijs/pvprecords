angular.module("app")
.controller("RecordsCtrl", function($scope,$stateParams,recordsFactory) {
  if($stateParams.server) {
    var server = $stateParams.server;
    recordsFactory.getServer(server).then(function(data) {
      $scope.data = data;
    });
  }
  else if($stateParams.class){
    var cls = $stateParams.class;
    recordsFactory.getClass(cls).then(function(data) {
      $scope.data = data;
    });
  }
  else if($stateParams.name) {
    var name = $stateParams.name;
    recordsFactory.getName(name).then(function(data) {
      $scope.data = data;
    });
  }
  else {
    alert("Invalid state.");
  }
})
