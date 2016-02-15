angular.module("app")
.directive("navBar", function() {
  return {
    restrict: 'E',
    templateUrl: 'app/shared/navbar/nav.template.html'
  }
})
