'use strict';
//The main controller of this applicaton which has factory injected inside it which will ctake all the data coming from factory.
var app = angular.module('fedexercise');
app
    .controller('flickrCrtl', function($scope, flickrFactory) {
        flickrFactory.callFlickrFunctions('flickr.people.getPublicPhotos').success(function(data) {
            $scope.photos = data.photos.photo;
        });

        $scope.photoOrder = 'title';

    });