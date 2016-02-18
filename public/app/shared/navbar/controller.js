angular.module("app")
.controller("NavCtrl", function($scope,$uibModal,$log,$state) {
  $scope.naServers = ['The Bastion','Begeren Colony','The Harbinger','The Shadowlands','Jung Ma','The Ebon Hawk','Prophecy of the Five','Jedi Covenant'];
  $scope.euServers = ['T3-M4','Darth Nihilus','Tomb of Freedon Nadd','Jar\'Kai Sword','The Progenitor','Vanjervalis Chain','Battle Meditation','Mantle of the Force','The Red Eclipse'];

  var classes = {
    "Republic": ["Jedi Guardian","Jedi Knight","Jedi Shadow","Jedi Sage","Scoundrel","Gunslinger","Vanguard","Commando"],
    "Imperial": ["Sith Juggernaut","Sith Marauder","Sith Assassin","Sith Sorcerer","Operative","Sniper","Powertech","Mercenary"]
  };

  $scope.classes = classes;
  $scope.name = "";
  $scope.$watch('name', function(newVal, oldVal) {
    if(newVal.length >= 3) {
      $state.go('byname', {"name": newVal})
    }
  })

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'app/shared/records/form.template.html',
      controller: 'FormCtrl',
      size: 'lg'
    });
  };

});
