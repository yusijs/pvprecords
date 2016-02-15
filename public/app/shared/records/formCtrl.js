angular.module('app').controller('FormCtrl', function ($scope, $uibModalInstance, recordsFactory,$timeout) {
  $scope.btnclass = "btn-info";
  $scope.naServers = ['The Bastion','Begeren Colony','The Harbinger','The Shadowlands','Jung Ma','The Ebon Hawk','Prophecy of the Five','Jedi Covenant'];
  $scope.euServers = ['T3-M4','Darth Nihilus','Tomb of Freedon Nadd','Jar\'Kai Sword','The Progenitor','Vanjervalis Chain','Battle Meditation','Mantle of the Force','The Red Eclipse'];
  var availableClasses = {
    "Republic": ["Jedi Guardian","Jedi Knight","Jedi Shadow","Jedi Sage","Scoundrel","Gunslinger","Vanguard","Commando"],
    "Imperial": ["Sith Juggernaut","Sith Marauder","Sith Assassin","Sith Sorcerer","Operative","Sniper","Powertech","Mercenary"]
  };
  $scope.categories = ["DPS","Total Damage","HPS","Total Healing","Total Protection","Protection in 1 life","Total damage taken","Biggest Hit","Solo Kills"];
  $scope.classes = availableClasses;
  $scope.$watch('data.faction', function(is,was) {
    if(is === "Republic") {
      $scope.classes = availableClasses.Republic;
    }
    else if (is === "Imperial") {
      $scope.classes = availableClasses.Imperial;
    }
    else {
      $scope.classes = availableClasses;
    }
  })

  $scope.ok = function (data) {
    $scope.btnclass = "btn-info fa fa-spinner fa-spin";
    $scope.alert = false;
    recordsFactory.add(data).then(function(response) {
      if(response.status === 200) {
      $scope.submitted = true;
      $scope.btnclass = "btn-success fa fa-check-circle-o";
      $timeout(function() {
        $uibModalInstance.close('success');
      }, 1000);
      }
      else if(response.status === 500) {
        $scope.submitted = true;
        $scope.btnclass = "btn-danger fa fa-exclamation-circle";
        $scope.alert = "Failed to submit. Please try again later!";
        $timeout(function() {
          $uibModalInstance.close('failed');
        }, 1000);
      }
      else {
        $scope.submitted = true;
        $scope.btnclass = "btn-danger fa fa-exclamation-circle";
        $scope.alert = "Failed to submit. You failed to fill out all fields";
      }
    }, function(response) {

    })
    // $uibModalInstance.close('Close');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
