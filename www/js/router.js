
angular.module('Checkinapp', ['Checkinapp.services']).
    config(function($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/loading.html',
            controller: 'LoadingController'
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        }).
        when('/events', {
            templateUrl: 'partials/events.html',
            controller: 'EventsController'
        }).
        when('/participant', {
            templateUrl: 'partials/participant.html',
            controller: 'ParticipantController'
        }).
        otherwise({
            redirectTo: '/'
        });
    });
