var myApp = angular.module("myApp", []);


myApp.controller("myController", function($scope){
    console.log("In myController ...");


    $scope.newUser = {};
    $scope.clickedUser = {};
    /**$scope.message = "";**/

    $scope.users = [

    {username: "Bappy", fullName: "Monjurul Islam", email:"mbappy@praavahealth.com", macAddress:"00:1A:C2:7B:00:47", Brand:"Apple", RAM:"8GB", SSD:"256", Battery:"Apple", Model:"Core i9", Charger:"Apple"}

      
    ];

    $scope.saveUser = function(){

    	$scope.users.push($scope.newUser);
    	$scope.newUser = {};
    	$scope.message = "New user added successfully!";

    };

    $scope.selectUser = function(user){

    	$scope.clickedUser = user;
    };

    $scope.updateuser = function(){

    };

    $scope.deleteUser = function(){
    	$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    };

    /**$scope.clearMessage(){

    	$scope.message = "";

    };**/
});