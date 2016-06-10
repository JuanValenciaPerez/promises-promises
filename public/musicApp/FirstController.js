'use strict';

myApp.controller('FirstCtrl', function ($scope,$q, musicSvc, movies) {

    $scope.localArtist = [];

    $scope.addArtist = function() {
        musicSvc.getArtist(buildArtist());


    };

movies.getMovies()
    $scope.getLocalArtists = function(){
        var promise =  musicSvc.getArtists();

        // promise.then() receiver does not have access to the resolve method
        promise.then(function(response){
            console.log(response);
            $scope.localArtist = response;
        },function(){
            console.log('error');
        },
        function(status) {
            console.log(status); // You can call the statu smethod as many times as you want
        })

    };

    $scope.getLocalArtists();

    function buildArtist() {
        return {
            name: $scope.name,
            genre: $scope.genre,
            score: $scope.score,
            id: Math.random() * 5000
        }
    }

    function removeArtist(){
        $scope.name = '';
        $scope.genre = '';
        $scope.score = '';
    }
});


