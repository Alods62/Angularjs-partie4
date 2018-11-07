var testApp = angular.module('app',[]);

testApp.controller('VoitureCtrl', function($scope, $http) {
  $http.get('voiture.json')
        .then(function(res){
          $scope.voitures = res.data;
        });

});
