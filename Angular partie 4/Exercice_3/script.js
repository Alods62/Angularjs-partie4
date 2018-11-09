var testApp = angular.module('app',[]);

testApp.controller('VoitureCtrl', function($scope, $http) {
  $http.get('voiture.json') // $ pour faire appel aux services angular js , $http.get pour faire une requête serveur, ici récup notre fichier json
        .then(function(test){ // .then la fonction se lance en cas de réussite du http get
          $scope.voitures = test.data; // les données du json sont mise dans le tableau voitures
        });

});

testApp.filter('voitureVerte', function() { //fonction filtre qu'on nomme voitureVerte
  return function(items) { //paramètre items
    var filtered = [];  //on crée un tableau vide "filtered"
    for (var i=0; i < items.length;i++){ //on passe en revu tout les éléments
      var item = items[i]; //le tableau d'objet est passé dans une variable
      console.log(item);
      if (item.couleur=="verte"){ //on vérifie si la valeur couleur de la liste d'objets item est égale à verte
        filtered.push(item.marque+" "+item.couleur); //on dépose les objets dont leurs valeurs couleurs sont égales à verte
      }
    }
    return filtered;
  };

});
