angular
    .module('luna')
    .controller('pageCtrl', ['$scope','$rootScope', '$state', pageCtrl]);

function pageCtrl($scope) {

    $scope.addPage = function ($state,$rootScope) {
        // $stateProvider.state('contacts', {
        //     template: '<h1>My Contacts</h1>'
        // });
        console.log($state);

    }
}