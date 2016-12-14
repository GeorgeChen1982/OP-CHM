

/**
 *
 * navigationCtrl
 *
 */

angular
    .module('luna')
    .controller('navigationCtrl', ['$scope', '$rootScope', 'UserConfigs', '$state','$cookies',navigationCtrl]);

function navigationCtrl($scope, $rootScope, UserConfigs,$state,$cookies) {

    $scope.isSelected = function (navId, navSelected) {

        var activeRoute = $rootScope.$state.current.name;
        var separateRoutes = activeRoute.split('.');

        if (!navSelected) { navSelected = separateRoutes[1] }

        if (navId == navSelected) {
            return false
        } else if ($rootScope.$state.current.name.indexOf(navId) == -1 && navId == navSelected) {
            return false
        } else {
            return true
        }

    }
    // var jsonStr;
    // UserConfigs.get({ Id: '001' }, function (newValue) {
    //     $scope.page = [];
    //     for (var i = 0; i < newValue.length; i++) {
    //         var modelobject = { model: {} };
    //         $scope.page.push(modelobject);
    //         jsonStr = newValue[i].Config;
    //         var obj = angular.fromJson(jsonStr);
    //         $scope.page[i].model = obj;
    //     }
    //     $rootScope.page=$scope.page;
    //     // for (var i = 0; i < newValue.length; i++) {
    //     //     if (newValue[i].pageID == $stateParams.pageID) {
    //     //         jsonStr = newValue[i].Config;
    //     //         break;
    //     //     }
    //     // }
    //     // $scope.i = $stateParams.pageID;
    //     // var obj = angular.fromJson(jsonStr);
    //     // $scope.page[$scope.i].model = obj;
    // });
    $scope.page = $rootScope.page;
    // console.log("nav page");
    // console.log($scope.page);
    //$scope.navList = [0, 1];
    $scope.addPage = function () {
        var Config = [];
        var pageAlias = "new page";
        var maxId=0;
        var i = 1;
        angular.forEach($rootScope.page, function (data) {
            if (pageAlias == data.pageAlias) {
                if (i > 1) {
                    pageAlias = "new page" + "(" + (i++) + ")";

                }
                else {
                    pageAlias = data.pageAlias + "(" + (i++) + ")";
                }
            }
            if(maxId<data.pageId){
                maxId=data.pageId;
            }
        });
        //var pageAlias = pageAlias;
        //var pageID=$rootScope.page.length;
        $rootScope.page.push({ pageId: parseInt(maxId)+1,pageAlias:pageAlias, model: Config });
        Config = angular.toJson(Config);
        var username=$cookies.get('username');
        var userConfig = { Id: username,pageId: parseInt(maxId)+1,pageAlias:pageAlias,Config: Config };
        userConfig = new UserConfigs(userConfig);
        userConfig.$save();

        // var i = Math.round(Math.random(1) * 10);
        // $scope.navList.push(i);
    }

    $scope.delete = function (obj) {
        //console.log(obj);
        angular.forEach($rootScope.page, function (data) {

            if (obj.pageId == data.pageId) {
                $rootScope.page.splice($rootScope.page.indexOf(data), 1);
            }
        });
        var userConfig = new UserConfigs(obj);
        //console.log(userConfig);
        userConfig.$delete();
        
    }

    $scope.rename = function (obj) {
        //$scope.page.
        var jsonStr;
        angular.forEach($rootScope.page,function(data){
            if(obj.pageId==data.pageId){
                jsonStr=data.model;
            }
        });
        jsonStr = angular.toJson(jsonStr);
        var username=$cookies.get('username');
        obj = { Id: username, pageId: obj.pageId, pageAlias: obj.pageAlias,Config:jsonStr};
        obj=new UserConfigs(obj);
        console.log(obj);
        obj.$put();
    }


}