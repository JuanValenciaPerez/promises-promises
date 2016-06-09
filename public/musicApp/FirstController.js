'use strict';

myApp.controller('FirstCtrl', function ($scope, ourSvc) {

    $scope.getAllPeople = function() {
        $scope.people = ourSvc.getAllPeople().then(function(response){
            console.log(response)
        });

    };


    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            score: $scope.score
        }
    }

    function removeArtist(){
        $scope.name = '';
        $scope.genre = '';
        $scope.score = '';
    }
});


