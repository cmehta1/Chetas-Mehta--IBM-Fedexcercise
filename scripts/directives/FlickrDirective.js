'use strict';

//Flickr Directive
var app = angular.module('fedexercise');

app.directive('flickr', function () {
    return {
        templateUrl: 'views/flickr.html',
        restrict: 'E'
    };
});