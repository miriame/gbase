'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html'
        }).
        when('/q/:q', {
            templateUrl: 'views/index.html'
        }).
        when('/q/:q/:facet1/:v1', {
            templateUrl: 'views/index.html'
        }).
        when('/q/:q/:facet1/:v1/:facet2/:v2', {
            templateUrl: 'views/index.html'
        }).
        when('/q/:q/:facet1/:v1/:facet2/:v2/:facet3/:v3', {
            templateUrl: 'views/index.html'
        }).
        when('/q/:q/:facet1/:v1/:facet2/:v2/:facet3/:v3/:facet4/:v4', {
            templateUrl: 'views/index.html'
        }).
        when('/q/:q/:facet1/:v1/:facet2/:v2/:facet3/:v3/:facet4/:v4/:facet5/:v5', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);