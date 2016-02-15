angular.module("app")
.controller("NavCtrl", function($scope,$uibModal,$log) {
  $scope.naServers = ['The Bastion','Begeren Colony','The Harbinger','The Shadowlands','Jung Ma','The Ebon Hawk','Prophecy of the Five','Jedi Covenant'];
  $scope.euServers = ['T3-M4','Darth Nihilus','Tomb of Freedon Nadd','Jar\'Kai Sword','The Progenitor','Vanjervalis Chain','Battle Meditation','Mantle of the Force','The Red Eclipse'];

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/shared/records/form.template.html',
      controller: 'FormCtrl',
      size: 'lg'
    });
  };

});
