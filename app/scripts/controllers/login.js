angular
    .module('luna')
    .controller('loginctrl', ['$rootScope', '$scope', '$state', 'UserLog', 'UserAuth', loginCtrl]);

function loginCtrl($rootScope, $scope, $state, UserLog, UserAuth) {

    $scope.username = '';
    $scope.password = '';

    var User;
    // User.Name='chm';
    // User.HashPassword='123';
    $scope.login = function () {
        console.log("start");
        UserAuth.get({ username: $scope.username, password: $scope.password }, function (newValue) {
            User = newValue;
            console.log(User);
            console.log();
            if ($scope.username == User.Name && $scope.password == User.HashedPassword) {
                UserLog.username = $scope.username;
                UserLog.isLogged = true;
                $state.go('main.dashboard');
                console.log("success");
                console.log(UserLog);
            }
            else {
                console.log('failure');
                console.log(UserLog);

            }
        });
    }

}