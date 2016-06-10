
myApp.service('musicSvc', function($q, $timeout,$http) {

	var itunesBase = "https://itunes.apple.com/search?term=",
		deferObj = $q.defer(),
		gotArtist = false,
		localArtist = {};


	this.getArtists = function(){
		function getLocalArtist (){
			return $http.get('http://localhost:3000/artists')
				.then(function(response){
					gotArtist = true;
					localArtist = response.data;
					deferObj.notify('getLocalArtist function complete');
					checkAllGood();

				})
		}

		function checkAllGood() {
			if(gotArtist && localArtist ) {
				console.log(deferObj);
				deferObj.resolve(localArtist);
			}
			else {
				deferObj.reject(true);
			}
		}

		getLocalArtist();

		return deferObj.promise;
	}



	// Example of $.all, promise, when reject and status

});



//Easy Client-Side Caching

myApp.factory("movies", function($q, $http) {
	var cachedMovies;
	return {
		getMovies: function() {
			// Checks cachedMovies if falsy then it will invoke helper()
			// If we have cachedMovies then we will return that in a promise
			return $q.when(cachedMovies || helper());
		}
	};

	function helper() {
		var deferred = $q.defer();
		$http.get("/movies").success(function(movies) {
			cachedMovies = movies;
			deferred.resolve(movies);
		});
		return deferred.promise;
	}
});
//deferred.resolve







	//this.getItunesArtist = function(name){
	//	return $http.get(itunesBase + name)
	//		//.then(function(response){
	//		//	console.log(response.data)
	//		//	return response.data;
	//		//})
	//};


    //
	//$q.all(promises).then(function() {
    //
	//})




//this.getArtist = function(obj) {
//	console.log(obj);
//	return $http.get(' http://localhost:3000/artists')
//		.then(function(response){
//			console.log(response.data)
//			return response.data;
//		})
//};

//myApp.service('localSvc', function($q, $timeout,$http) {
//
//	var localBase = "http://localhost:3000/";
//
//	this.getAllArtists = function() {
//		return $http.get(' http://localhost:3000/artists')
//			.then(function(response){
//				console.log(response.data)
//				return response.data;
//			})
//	};
//
//});


// Create a add person post method

//this.person = function(userObj) {
//    return $http({
//        data: userObj,
//        method: 'POST',
//        url: baseUrl
//    }).then(function(response){
//        if(reponse.status !== 200) {
//            return
//        }
//        return response.data
//    })
//
//}

//this.addNewArtist = function (artistObj) {
//    console.log(artistObj);
//    if(artistObj.score >= 50 ) {
//        this.reallyLike.push(artistObj);
//
//    } else if (artistObj.score < 50 ) {
//        this.kindOfLike.push(artistObj);
//
//    }
//
//};
