
myApp.service('ourSvc', function($http) {

    	this.getAllPeople = function() {
    	return $http.get(' http://localhost:3000/people')
    		.then(function(response){
                console.log(response.data)
                return response.data;
    		})
    };


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

});