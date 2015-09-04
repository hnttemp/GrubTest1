'use strict';
angular.module('starter.controllers', [])
 
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('AddLocationController', function($scope, $state, $ionicLoading, $rootScope,$ionicHistory) {

$scope.locationData = {};

$scope.error = {};
$scope.goBack = function() {
  $ionicHistory.goBack();

    };
    

    $scope.register = function() {
alert($scope.locationData.name);
        $scope.loading = $ionicLoading.show({
            content: 'Sending',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

       var GameScore = Parse.Object.extend("Location");
var gameScore = new GameScore();

gameScore.set("name",$scope.locationData.name);

gameScore.save(null, {
  success: function(gameScore) {
  	
  	$ionicLoading.hide();
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
  	$ionicLoading.hide();
  	alert("save");
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
    };
})

.controller('AddDishController', function($scope, $state, $ionicLoading, $rootScope,$ionicHistory) {

//Category.selectedCategory
$scope.dishData = {};
$scope.Category = {};
$scope.DishCategoriesList = [];
$scope.error = {};

$scope.goBack = function() {
 
  $ionicHistory.goBack();

    };
 
//Category list on load
var DishCategory = Parse.Object.extend("DishCategory");
var query = new Parse.Query(DishCategory);
query.find({
  success: function(results) {
    //alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    $scope.DishCategoriesList=results;
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      //alert(object.id + ' - ' + object.get('name'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

$scope.showSelectValue = function(mySelect) {
    //alert($scope.DishCategoriesList[mySelect-1].get('name'));
   $scope.Category.slectedIndex=mySelect;
    alert(mySelect);
}
    $scope.addDish = function() {

alert($scope.DishCategoriesList[$scope.Category.slectedIndex]);


        $scope.loading = $ionicLoading.show({
            content: 'Sending',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

       var GameScore = Parse.Object.extend("Dish");
var gameScore = new GameScore();

gameScore.set("name",$scope.dishData.name);
gameScore.set("description",$scope.dishData.description);
var relation = gameScore.relation("DishCategory");
//relation.add($scope.DishCategoriesList[0]);


relation.add($scope.DishCategoriesList[$scope.Category.slectedIndex]);
gameScore.save(null, {
  success: function(gameScore) {
  	
  	$ionicLoading.hide();
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
  	$ionicLoading.hide();
  	alert("save");
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
    };
})
.controller('HomeController', function($scope, $state, $ionicLoading, $rootScope) {
    $scope.user = {};
    $scope.error = {};

    $scope.register = function() {

        $scope.loading = $ionicLoading.show({
            content: 'Sending',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
       var GameScore = Parse.Object.extend("Location");
var gameScore = new GameScore();

gameScore.set("mame","Vijay Nagar");

gameScore.save(null, {
  success: function(gameScore) {
  	$ionicLoading.hide();
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
  	$ionicLoading.hide();
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
    };
})