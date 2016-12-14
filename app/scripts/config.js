/**
 * LUNA - Responsive Admin Theme
 * version 1.2
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider,$httpProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/commonviews/login");
    $stateProvider

        // Main content
        .state('main', {
            abstract: true,
            url: "/main",
            resolve: {
                //pageIdvalue:0
                // pageIdvalue: function () {
                //     return {
                //         pageIndex: 0,
                //         pageId: [0]
                //     }
                // }
                // pageIdvalue: function () {
                //     pageIdinit = 0;
                //     return function () { return pageIdinit++ };
                // }
                //     navitem: function navitem($compile) {
                //         return {
                //             restrict: "EA",
                //             templateUrl: "views/partial/navitem.html",
                //             link: function (scope, element, attrs) {
                //             }
                //         }
                //     }
            },
            templateUrl: "views/common/content.html",
            // controller: function ($scope, $rootScope, $compile, pageIdvalue) {
            //     $scope.addPage = function () {
            //         var childscope = $scope.$new();
            //         childscope.pageId = pageIdvalue.pageId[pageIdvalue.pageIndex++];
            //         pageIdvalue.pageId.push(pageIdvalue.pageIndex);
            //         var obj = $compile("<navitem></navitem>")(childscope);
            //         $("#myinsert").append(obj);
            //     }
            // }
        })
        .state('main.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard'
            }
        })
        .state('main.monitoring', {
            url: "/monitoring",
            template: "<div ui-view></div>"
        })
        .state('main.monitoring.metrics', {
            url: "/metrics",
            templateUrl: "views/monitoring/metrics.html",
            data: {
                pageTitle: 'Metrics'
            }
        })
        .state('main.monitoring.usage', {
            url: "/usage",
            templateUrl: "views/monitoring/usage.html",
            data: {
                pageTitle: 'Usage'
            }
        })
        .state('main.monitoring.activity', {
            url: "/activity",
            templateUrl: "views/monitoring/activity.html",
            data: {
                pageTitle: 'Activity'
            }
        })
        .state('main.general', {
            url: "/general",
            template: "<div ui-view></div>"
        })
        .state('main.general.panels', {
            url: "/panels",
            templateUrl: "views/general/panels.html",
            data: {
                pageTitle: 'Panels'
            }
        })
        .state('main.general.typography', {
            url: "/typography",
            templateUrl: "views/general/typography.html",
            data: {
                pageTitle: 'Typography'
            }
        })
        .state('main.general.icons', {
            url: "/icons",
            templateUrl: "views/general/icons.html",
            data: {
                pageTitle: 'Icons'
            }
        })
        .state('main.general.buttons', {
            url: "/buttons",
            templateUrl: "views/general/buttons.html",
            data: {
                pageTitle: 'Buttons'
            }
        })
        .state('main.general.tabs', {
            url: "/tabs",
            templateUrl: "views/general/tabs.html",
            data: {
                pageTitle: 'Tabs'
            }
        })
        .state('main.general.modals', {
            url: "/modals",
            templateUrl: "views/general/modals.html",
            data: {
                pageTitle: 'Modals'
            }
        })
        .state('main.general.alerts', {
            url: "/alerts",
            templateUrl: "views/general/alerts.html",
            data: {
                pageTitle: 'Alerts'
            }
        })
        .state('main.general.gridsystem', {
            url: "/gridsystem",
            templateUrl: "views/general/gridsystem.html",
            data: {
                pageTitle: 'Grid system'
            }
        })
        .state('main.general.draggable', {
            url: "/draggable",
            templateUrl: "views/general/draggable.html",
            data: {
                pageTitle: 'Draggable'
            }
        })
        .state('main.tables', {
            url: "/tables",
            template: "<div ui-view></div>"
        })
        .state('main.tables.tablestyles', {
            url: "/pantablestylesels",
            templateUrl: "views/tables/tablestyles.html",
            data: {
                pageTitle: 'Table styles'
            }
        })
        .state('main.tables.datatables', {
            url: "/datatables",
            templateUrl: "views/tables/datatables.html",
            data: {
                pageTitle: 'Datatables'
            }
        })
        .state('main.formelements', {
            url: "/formelements",
            templateUrl: "views/formelements.html",
            data: {
                pageTitle: 'Form elements'
            }
        })
        .state('main.charts', {
            url: "/charts",
            template: "<div ui-view></div>"
        })
        .state('main.charts.flot', {
            url: "/flot",
            templateUrl: "views/charts/flot.html",
            data: {
                pageTitle: 'Flot'
            }
        })
        .state('main.charts.sparkline', {
            url: "/sparkline",
            templateUrl: "views/charts/sparkline.html",
            data: {
                pageTitle: 'Sparkline'
            }
        })
        .state('main.basic', {
            url: "/basic",
            template: "<div ui-view></div>"
        })
        .state('main.basic.list', {
            url: "/list",
            templateUrl: "views/basic/list.html",
            data: {
                pageTitle: 'List'
            }
        })
        .state('main.basic.profile', {
            url: "/profile",
            templateUrl: "views/basic/profile.html",
            data: {
                pageTitle: 'Profile'
            }
        })
        .state('main.basic.support', {
            url: "/support",
            templateUrl: "views/basic/support.html",
            data: {
                pageTitle: 'Support'
            }
        })
        .state('main.basic.timeline', {
            url: "/timeline",
            templateUrl: "views/basic/timeline.html",
            data: {
                pageTitle: 'Timeline'
            }
        })
        .state('commonviews', {
            abstract: true,
            url: "/commonviews",
            templateUrl: "views/common/blank.html",
            data: {
                specialClass: 'blank'
            }
        })
        .state('commonviews.login', {
            url: "/login",
            templateUrl: "views/commonviews/login.html",
            controller:'loginctrl',
            data: {
                pageTitle: 'Login'
            }
        })
        .state('commonviews.register', {
            url: "/register",
            templateUrl: "views/commonviews/register.html",
            data: {
                pageTitle: 'Register'
            }
        })
        .state('commonviews.forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/commonviews/forgotpassword.html",
            data: {
                pageTitle: 'Forgot password'
            }
        })
        .state('commonviews.error', {
            url: "/error",
            templateUrl: "views/commonviews/error.html",
            data: {
                pageTitle: 'Error'
            }
        })
        .state('main.versions', {
            url: "/versions",
            templateUrl: "views/versions.html",
            cache:true,
            data: {
                pageTitle: 'Versions'
            }
        })
        .state('main.Demo', {
            url: "/Demo",
            templateUrl: "views/Demo.html",
            data: {
                pageTitle: 'Demo'
            }
        })
        .state('main.Demo1', {
            url: "/Demo1",
            templateUrl: "views/Demo1.html",
            data: {
                pageTitle: 'Demo'
            }
        })
        .state('main.DemoForGridSter', {
            url: "/DemoForGridSter/:pageID",
            templateUrl: "views/DemoForGridSter.html",
            controller: "DemoForGridSterCtrl",
            cache:false,
            data: {
                pageTitle: 'DemoForGridSter'
            }
        })
        .state('main.DemoForServer', {
            url: "/DemoForServer",
            templateUrl: "views/DemoForServer.html",
            controller: "DemoForServerCtrl",
            data: {
                pageTitle: 'DemoForServer'
            }
        })
}

angular
    .module('luna')
    .config(configState)
    .run(function ($rootScope, $state, UserConfigs,$cookies,$http) {
        $rootScope.$state = $state;
        //console.log("UserConfigs");
        //console.log(UserConfigs);
        var jsonStr;
        var username=$cookies.get('username');
        $rootScope.username=username;
        console.log(username);
        // var url='/api/UserConfigs?ID='+username;
        // $http({
        //     method:'GET',
        //     url:url
        // }).success(function(data,status,headers,config){
        //     console.log(data);
        //     $rootScope.page = [];
        //     for (var i = 0; i < data.length; i++) {
        //         var modelobject = {pageId:0, model: {} };
        //         console.log("ID:");
        //          console.log(data[i].ID);
        //         // console.log("pageAlias:");
        //         // console.log(newValue[i].pageAlias);
        //         $rootScope.page.push(modelobject);
        //         jsonStr = data[i].Config;
        //         var obj = angular.fromJson(jsonStr);
        //         $rootScope.page[i].model = obj;
        //         $rootScope.page[i].pageId=data[i].pageID;
        //         $rootScope.page[i].pageAlias=data[i].pageAlias;
        //     }
        // });
        UserConfigs.Id=username;
        UserConfigs.query({Id:username},function (newValue) {
            $rootScope.page = [];
            for (var i = 0; i < newValue.length; i++) {
                var modelobject = {pageId:0, model: {} };
                console.log("ID:");
                 console.log(newValue[i].ID);
                // console.log("pageAlias:");
                // console.log(newValue[i].pageAlias);
                $rootScope.page.push(modelobject);
                jsonStr = newValue[i].Config;
                var obj = angular.fromJson(jsonStr);
                $rootScope.page[i].model = obj;
                $rootScope.page[i].pageId=newValue[i].pageID;
                $rootScope.page[i].pageAlias=newValue[i].pageAlias;
            }
        });
        
    });