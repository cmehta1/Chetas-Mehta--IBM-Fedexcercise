'use strict';
//API and UserID of NASA is given to this factory which will fetch all the images from NASA Flickr account where baseURL is also given. Passing all theparameters of link into http get method.
angular.module('fedexercise')
  .factory('flickrFactory', function($http) {
    var apiKey = 'a5e95177da353f58113fd60296e1d250';
    var userId = '24662369@N07';
    var baseURI = 'https://api.flickr.com/services/rest/';
    
    return {
      callFlickrFunctions: function (flickrMethod) {

        return $http.get(baseURI + 
          '?method=' + flickrMethod + 
          '&api_key=' + apiKey + 
          '&user_id=' + userId + 
          '&format=json' + 
          '&nojsoncallback=1');
      }
    };
  });
