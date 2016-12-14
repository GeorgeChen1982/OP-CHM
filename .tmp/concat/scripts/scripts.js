// test
/**
 * LUNA - Responsive Admin Theme
 * version 1.2
 *
 */
(function () {
    angular.module('luna', [
        'ui.router',                // Angular flexible routing
        'ui.bootstrap',             // AngularJS native directives for Bootstrap
        'angular-flot',             // Flot chart
        'datamaps',                 // Datamaps directive
        'ngAnimate',                // Angular animations
        'toastr',                   // Toastr notification
        'ui.sortable',              // AngularJS ui-sortable
        'datatables',               // Angular datatables plugin
        'datatables.buttons',       // Datatables Buttons
        'ui.tree',                   // Angular ui Tree
		'gridster',
        'ngResource',
        'ngCookies'
    ])
})();


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
/**
 * LUNA - Responsive Admin Theme
 *
 */

angular
    .module('luna')
    .directive('pageTitle', pageTitle)
    .directive('minimalizaMenu', minimalizaMenu)
    .directive('sparkline', sparkline)
    .directive('panelTools', ["$rootScope","$compile",panelTools]);


/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title
                var title = 'LUNA | AngularJS Responsive WebApp';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'LUNA | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
			//console.log($rootScope);
        }
    }
}

/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function minimalizaMenu($rootScope) {
    return {
        restrict: 'EA',
        template: '<div class="left-nav-toggle"><a href ng-click="minimalize()"><i class="stroke-hamburgermenu"></i> </a>',
        controller: function ($scope, $element) {

            $scope.minimalize = function () {
                $("body").toggleClass("nav-toggle");
            }
        }
    };
}

/**
 * sparkline - Directive for Sparkline chart
 */
function sparkline() {
    return {
         restrict: 'A',
         scope: {
            sparkData: '=',
            sparkOptions: '=',
        }, 
        link: function (scope, element, attrs) {
            scope.$watch('sparkData', function () {
				//alert(scope.sparkData);
                render();
            });
            scope.$watch('sparkOptions', function(){
                render();
            });
            var render = function () {
                $(element).sparkline(scope.sparkData,scope.sparkOptions);
            };
			scope.$on('gridster-resized', render);
        	scope.$on('gridster-item-resized', render);
	        scope.$on('gridster-item-transition-end', render);
        }
    }
};


/**
 * panelTools - Directive for panel tools elements in right corner of panel
 */
function panelTools($rootScope,$timeout,$compile) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/panel_tools.html',
        controller: function ($scope, $element,$compile) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var hpanel = $element.closest('div.panel');
                var icon = $element.find('i:first');
                var body = hpanel.find('div.panel-body');
                var footer = hpanel.find('div.panel-footer');
                body.slideToggle(300);
                footer.slideToggle(200);

                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
				console.log(hpanel);
                hpanel.toggleClass('').toggleClass('panel-collapse');
                $timeout(function () {
                    hpanel.resize();
                    hpanel.find('[id^=map-]').resize();
                }, 50);
            };

            // Function for close ibox
            $scope.closebox = function () {
                var hpanel = $element.closest('div.panel');
				$rootScope.model.splice($rootScope.model.indexOf(hpanel.scope().item), 1);
				console.log($rootScope.model);
               // hpanel.remove();
            };
			//Show Configzone
			 /* $scope.showConfig = function () {
                var hpanel = $element.closest('div.panel');
				var body = hpanel.find('#content-zone');
				body.toggleClass("col-md-12").toggleClass("col-md-8");
				hpanel.find('#configZone').toggle();
                ;
            }; */
			  $scope.showConfig =function () {
                $("body").toggleClass("config-toggle");
				$("body").toggleClass("nav-toggle");
				var hpanel = $element.closest('div.panel');
                var body = hpanel.find('div.panel-body');
				var targetscope=body.children().scope();
				targetscope.$broadcast("configevent",targetscope);
				console.log($rootScope);
				$rootScope.$broadcast("gridster-resized");
				}				
			  
}
}
}



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
/**
 *
 * dashboardCtrl
 *
 */

angular
    .module('luna')
    .controller('dashboardCtrl', dashboardCtrl);

function dashboardCtrl($scope){


    /**
     * Sparkline
     */

    $scope.chartData1 = [20, 34, 43, 43, 35, 44, 32, 44, 52, 45];
    $scope.chartOptions1 = {
        type: 'line',
        lineColor: '#FFFFFF',
        lineWidth: 3,
        fillColor: '#404652',
        height: 47,
        width: '100%'
    };

    $scope.chartData2 = [-8, 2, 4, 3, 5, 4, 3, 5, 5, 6, 3, 9, 7, 3, 5, 6, 9, 5, 6, 7, 2, 3, 9, 6, 6, 7, 8, 10, 15, 16, 17, 15];
    $scope.chartOptions2 = {
        type: 'line',
        lineColor: '#fff',
        lineWidth: 3,
        fillColor: '#393D47',
        height: 70,
        width: '100%'
    };

    $scope.chartData3 = [4, 2];
    $scope.chartOptions3 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData4 = [3, 2];
    $scope.chartOptions4 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData5 = [4, 1];
    $scope.chartOptions5 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData6 = [3, 5];
    $scope.chartOptions6 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData7 = [6, 2];
    $scope.chartOptions7 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData8 = [10, 34, 13, 33, 35, 24, 32, 24, 52, 35];
    $scope.chartOptions8 = {
        type: 'line',
        lineColor: '#FFFFFF',
        lineWidth: 3,
        fillColor: '#f7af3e',
        height: 75,
        width: '100%'
    };

    /**
     * Flot
     */

    var data1 = [ [0, 16], [1, 24], [2, 11], [3, 7], [4, 10], [5, 15], [6, 24], [7, 30] ];
    var data2 = [ [0, 26], [1, 44], [2, 31], [3, 27], [4, 36], [5, 46], [6, 56], [7, 66] ];

    $scope.chartFlotData = [data2, data1];
    $scope.chartFlotOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 1
            }
        },
        grid: {
            tickColor: "#404652",
            borderWidth: 0,
            borderColor: '#404652',
            color: '#404652'
        },
        colors: [ "#f7af3e","#DE9536"]
    };

}
/**
 *
 * metricsCtrl
 *
 */

angular
    .module('luna')
    .controller('metricsCtrl', metricsCtrl);

function metricsCtrl($scope, $timeout){


    /**
     * Flot
     */

    var data1 = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 4], [6, 5], [7, 6],
        [8, 5], [9, 4], [10, 5], [11, 4], [12, 5], [13, 6], [14, 7], [15, 6],
        [16, 7], [17, 15], [18, 8], [19, 7], [20, 6], [21, 6], [22, 5], [23, 6],
        [24, 7], [25, 6], [26, 7], [27, 5], [28, 6], [29, 5], [30, 4], [31, 5]];

    var data2 = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 6],
        [8, 5], [9, 4], [10, 5], [11, 4], [12, 5], [13, 6], [14, 7], [15, 6],
        [16, 7], [17, 4], [18, 4], [19, 5], [20, 6], [21, 6], [22, 5], [23, 6],
        [24, 7], [25, 6], [26, 3], [27, 4], [28, 5], [29, 5], [30, 4], [31, 4]];

    var data3 = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 4], [6, 5], [7, 6],
        [8, 5], [9, 4], [10, 5], [11, 4], [12, 5], [13, 6], [14, 7], [15, 6],
        [16, 7], [17, 3], [18, 8], [19, 7], [20, 6], [21, 6], [22, 5], [23, 6],
        [24, 7], [25, 6], [26, 7], [27, 5], [28, 6], [29, 5], [30, 4], [31, 22]];

    var data4 = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 4], [6, 5], [7, 6],
        [8, 3], [9, 5], [10, 6], [11, 7], [12, 8], [13, 6], [14, 7], [15, 8],
        [16, 9], [17, 21], [18, 20], [19, 21], [20, 21], [21, 23], [22, 22], [23, 24],
        [24, 22], [25, 21], [26, 22], [27, 21], [28, 20], [29, 19], [30, 20], [31, 21]];

    // Charts option
    var chartUsersOptions = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2
        },
        yaxis: {
            min: 0, max: 70, tickSize: 20
        },
        grid: {
            borderWidth: 0
        }
    };

    // Charts option
    var chartUsersOptions2 = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2
        },
        yaxis: {
            min: 0, max: 100, tickSize: 20
        },
        grid: {
            tickColor: "#484C5A",
            borderWidth: 0
        }
    };

    $scope.chartData1 = [data1];
    $scope.chartOptions1 = chartUsersOptions;

    $scope.chartData2 = [data2];
    $scope.chartOptions2 = chartUsersOptions;

    $scope.chartData3 = [data3];
    $scope.chartOptions3 = chartUsersOptions;

    $scope.chartData4 = [data4];
    $scope.chartOptions4 = chartUsersOptions;


    // Set total point for generated data
    var data = [],
        totalPoints = 300;

    // Function for generation data
    function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5.6;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            data.push(y);

        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    var updateInterval = 120;

    $scope.chartData5 = [data];
    $scope.chartOptions5 = chartUsersOptions2;

    function update() {
        var newdata = [getRandomData()];
        $scope.chartData5 = newdata ;
        $timeout(update, updateInterval);
    }

    // Run update method
    update();

}
/**
 *
 * usageCtrl
 *
 */

angular
    .module('luna')
    .controller('usageCtrl', usageCtrl);

function usageCtrl($scope, $timeout){

    // Function to generate data
    function setUsage(){
        var usage = Math.floor(Math.random() * 100) + 1;
        return usage;
    }

    var updateInterval = 800;

    function update() {

        $scope.usage1 = setUsage();
        $scope.usage2 = setUsage();
        $scope.usage3 = setUsage();
        $scope.usage4 = setUsage();
        $scope.usage5 = setUsage();
        $scope.usage6 = setUsage();
        $scope.usage7 = setUsage();
        $scope.usage8 = setUsage();
        $scope.usage9 = setUsage();
        $timeout(update, updateInterval);

    }

    // Run update method
    update();

}
/**
 *
 * activityCtrl
 *
 */

angular
    .module('luna')
    .controller('activityCtrl', activityCtrl);

function activityCtrl($scope, $timeout){

    // Set map options and data
    $scope.mapObject = {
        scope: 'world',
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        responsive: true,
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0

        },
        data: {
            USA: { fillKey: "active" },
            RUS: { fillKey: "active" }
        }
    };


    // Set example data for table
    $scope.items = [
        {"jobid":" 43 AT_DFrtVs","ip":" 32.52.33.65","time":" 16:55:33 pm","value":" 34","usage":" 54"},
        {"jobid":" 32 AT_TFVdw","ip":" 55.754.33.54","time":" 10:33:11 pm","value":" 32","usage":" 24"},
        {"jobid":" 90 AT_etOFO","ip":" 322.98.33.165","time":" 11:21:53 pm","value":" 92","usage":" 12"},
        {"jobid":" 43 AT_DFrtVs","ip":" 100.22.33.65","time":" 16:55:12 pm","value":" 79","usage":" 44"},
        {"jobid":" 78 AT_IwbLP","ip":" 22.75.44.65","time":" 16:55:31 pm","value":" 21","usage":" 61"},
        {"jobid":" 43 AT_DFrtVs","ip":" 12.98.67.124","time":" 12:23:61 pm","value":" 33","usage":"11"},
        {"jobid":" 34 AT_nIidW","ip":" 32.52.33.65","time":" 10:43:65 pm","value":" 28","usage":" 32"},
        {"jobid":" 03 AT_DFrtVs","ip":" 93.22.642.65","time":" 15:33:53 pm","value":" 85","usage":" 55"},
        {"jobid":" 43 AT_eDsPO","ip":" 100.22.33.65","time":" 16:55:52 pm","value":" 79","usage":" 44"},
        {"jobid":" 11 AT_DFrtVs","ip":" 22.75.44.65","time":" 16:55:32 pm","value":" 21","usage":" 61"},
        {"jobid":" 66 AT_DFrtVs","ip":" 22.52.33.421","time":" 14:33:66 pm","value":" 93","usage":"71"},
        {"jobid":" 43 AT_DFrtVs","ip":" 132.21.32.625","time":" 16:55:44 pm","value":" 32","usage":" 10"},
        {"jobid":" 52 AT_NaJgS","ip":" 32.52.33.65","time":" 17:66:55 pm","value":" 34","usage":" 8"},
        {"jobid":" 87 AT_KAmLM","ip":" 93.22.642.65","time":" 15:33:53 pm","value":" 85","usage":" 55"}
    ];

    // Function to generate random text - for demo purpose
    function simpleText()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    // Function to generate random new object for table data
    function generateRow() {

        var now = new moment();
        var endTime = now.format("HH:mm:ss a");

        var number0 = Math.floor(Math.random() * 100) + 1;
        var number1 = Math.floor(Math.random() * 100) + 1;
        var number2 = Math.floor(Math.random() * 100) + 1;
        var number3 = Math.floor(Math.random() * 100) + 1;
        var number4 = Math.floor(Math.random() * 100) + 1;
        var number5 = Math.floor(Math.random() * 100) + 1;
        var usage = Math.floor(Math.random() * 100) + 1;

        var jobid = number0 + ' AT_' + simpleText();
        var ip = number1 +'.'+number2 +'.'+number3 +'.' +number4;

        var newRow = {"jobid":jobid,"ip":ip,"time":endTime,"value": number5,"usage":usage};

        return newRow;
    }

    // Function to generate map data
    function mapChanges() {

        var random = Math.floor(Math.random() * 100) + 1;
        var random2 = Math.floor(Math.random() * 100) + 1;
        var random3 = Math.floor(Math.random() * 100) + 1;
        var random4 = Math.floor(Math.random() * 100) + 1;
        var random5 = Math.floor(Math.random() * 100) + 1;

        var usa = "defaultFill",
            rus = "defaultFill",
            aus = "defaultFill",
            bra = "defaultFill",
            ind = "defaultFill";

        if (random > 50) {  usa = 'active'} else { usa = 'defaultFill'}
        if (random2 > 50) { rus = 'active'} else { rus = 'defaultFill'}
        if (random3 > 50) { aus = 'active'} else { aus = 'defaultFill'}
        if (random4 > 50) { bra = 'active'} else { bra = 'defaultFill'}
        if (random5 > 50) { ind = 'active'} else { ind = 'defaultFill'}

        var newData = {
            USA: { fillKey: usa },
            RUS: { fillKey: rus },
            AUS: { fillKey: aus },
            BRA: { fillKey: bra },
            IND: { fillKey: ind }
        };
        return newData;
    }

    // Function to generate usage data
    function setUsage(){
        var usage = Math.floor(Math.random() * 100) + 1;
        return usage;
    }

    var updateInterval = 800;

    // Function to run all generate functions
    function update() {
        $scope.items.shift();
        $scope.items.push(generateRow());
        $scope.usage1 = setUsage();
        $scope.usage2 = setUsage();
        $scope.usage3 = setUsage();
        $scope.usage4 = setUsage();
        $scope.mapObject.data = mapChanges();
        $timeout(update, updateInterval);
    }

    // Run initial update
    update();

}
/**
 *
 * modalCtrl
 *
 */

angular
    .module('luna')
    .controller('modalCtrl', modalCtrl);

function modalCtrl($scope, $uibModal){

    $scope.openModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.openModal2 = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example2.html',
            size: size,
            controller: ModalInstanceCtrl
        });
    };

}


function ModalInstanceCtrl ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};
/**
 *
 * alertsCtrl
 *
 */

angular
    .module('luna')
    .controller('alertsCtrl', alertsCtrl);

function alertsCtrl($scope, toastr, toastrConfig){

    angular.extend(toastrConfig, {
        newestOnTop: false,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        progressBar: true
    });

    $scope.pop2 = function () {
        toastr.info('Info - This is a custom LUNA info notification', {});
    };

    $scope.pop3 = function () {
        toastr.success('Success - This is a LUNA success notification', {});
    };

    $scope.pop1 = function () {
        toastr.warning('Warning - This is a LUNA warning notification', {});
    };

    $scope.pop4 = function () {
        toastr.error('Error - This is a LUNA error notification', {});
    };



}

/**
 *
 * draggableCtrl
 *
 */

angular
    .module('luna')
    .controller('draggableCtrl', draggableCtrl);

function draggableCtrl($scope){

    $scope.sortableOptions = {
        connectWith: ".connectPanels",
        handler: ".panel-body"
    };

}

/**
 *
 * datatablesCtrl
 *
 */

angular
    .module('luna')
    .controller('datatablesCtrl', datatablesCtrl);

function datatablesCtrl($scope, DTOptionsBuilder){



    $scope.dtOptions1 = DTOptionsBuilder.newOptions()
        .withDOM("t");


    $scope.dtOptions2 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-6'l><'col-sm-6'f>>t<'row'<'col-sm-6'i><'col-sm-6'p>>")
        .withDisplayLength(6);


    $scope.dtOptions3 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
        .withButtons([
            {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'print',className: 'btn-sm'}
        ]);
}

/**
 *
 * flotChartsCtrl
 *
 */

angular
    .module('luna')
    .controller('flotChartsCtrl', flotChartsCtrl);

function flotChartsCtrl($scope){

    /**
     * Flot
     */

    var data1 = [ [0, 3], [1, 6], [2, 8], [3, 9], [4, 12], [5, 14], [6, 15], [7, 12],
        [8, 14], [9, 12], [10, 11], [11, 10], [12, 14], [13, 16], [14, 15], [15, 15],
        [16, 16], [17, 12], [18, 13], [19, 15], [20, 16], [21, 18], [22, 20], [23, 23],
        [24, 22], [25, 21], [26, 20], [27, 17], [28, 15], [29, 14], [30, 13], [31, 10]];

    $scope.chartFlotData1 = [data1];
    $scope.chartFlotOptions1 = {
        points: {
            show: true,
            fill: true,
            lineWidth: 1,
            fillColor: "#f6a821"
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData2 = [data1];
    $scope.chartFlotOptions2 = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2,
            fillColor: "#f6a821"
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData3 = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 28], [6, 22],[7, 20], [8, 18], [9, 17], [10, 13], [11, 15], [12, 17] ]
        }
    ];
    $scope.chartFlotOptions3 = {
        bars: {
            show: true,
            fill: false,
            lineWidth: 2,
            fillColor: "#f6a821"
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData4 = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 28], [6, 22],[7, 20], [8, 18], [9, 17], [10, 13], [11, 15], [12, 17] ]
        }
    ];
    $scope.chartFlotOptions4 = {
        lines: {
            show: true,
            steps: true
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData5 = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];
    $scope.chartFlotOptions5 = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 2,
                fill: false
            },
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData6 = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];
    $scope.chartFlotOptions6 = {
        lines: {
            show: true,
            fill: 0.1
        },
        grid: {
            borderWidth: 0
        }
    };


}


/**
 *
 * sparklinechartsCtrl
 *
 */

angular
    .module('luna')
    .controller('sparklinechartsCtrl', sparklinechartsCtrl);

function sparklinechartsCtrl($scope){

    /**
     * Sparkline
     */

    $scope.chartData1 = [34, 43, 43, 35, 44, 32, 44, 52, 25];
    $scope.chartOptions1 = {
        type: 'line',
        lineColor: '#f6a821',
        fillColor: '#f6a821',
        width: '150',
        height: '20'
    };

    $scope.chartData2 = [5, 6, 7, 2, 0, -4, -2, 4];
    $scope.chartOptions2 = {
        type: 'bar',
        barColor: '#f6a821',
        negBarColor: '#c6c6c6',
        width: '150',
        height: '20'
    };

    $scope.chartData3 = [10, 2];
    $scope.chartOptions3 = {
        type: 'pie',
        sliceColors: ['#f6a821', '#ffffff'],
        width: '150',
        height: '20'
    };

    $scope.chartData4 = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44];
    $scope.chartOptions4 = {
        type: 'line',
        lineColor: '#f6a821',
        fillColor: '#f6a821',
        width: '150',
        height: '20'
    };

    $scope.chartData5 = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];
    $scope.chartOptions5 = {
        type: 'tristate',
        posBarColor: '#f6a821',
        negBarColor: '#ffffff',
        width: '150',
        height: '20'
    };

    $scope.chartData6 = [4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ];
    $scope.chartOptions6 = {
        type: 'discrete',
        lineColor: '#f6a821',
        width: '150',
        height: '20'
    };



}


/**
 *
 * profileCtrl
 *
 */

angular
    .module('luna')
    .controller('profileCtrl', profileCtrl);

function profileCtrl($scope){

    $scope.chartFlotData = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];
    $scope.chartFlotOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 2,
                fill: false
            },
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

}
/**
 *
 * listCtrl
 *
 */

angular
    .module('luna')
    .controller('listCtrl', listCtrl);

function listCtrl($scope){

    // Handle actions
    $scope.remove = function(scope) {
        scope.remove();
    };
    $scope.toggle = function(scope) {
        scope.toggle();
    };
    $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0,0, a);
    };
    $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });
    };
    $scope.collapseAll = function() {
        $scope.$broadcast('collapseAll');
    };
    $scope.expandAll = function() {
        $scope.$broadcast('expandAll');
    };

    // Nestable list example data
    $scope.data = [{
        "id": 1,
        "title": "Sem fringilla",
        "nodes": [
            {
                "id": 11,
                "title": "Nisl lacus et, ultricies",
                "nodes": [
                    {
                        "id": 111,
                        "title": "Congue hac",
                        "nodes": []
                    }
                ]
            },
            {
                "id": 12,
                "title": "Consectetuer orci mollis",
                "nodes": []
            }
        ],
    }, {
        "id": 2,
        "title": "Gravida morbi non",
        "nodes": [
            {
                "id": 21,
                "title": "Lorem aliquam",
                "nodes": []
            },
            {
                "id": 22,
                "title": "Inceptos nibh",
                "nodes": []
            }
        ],
    }, {
        "id": 3,
        "title": "Pede hymenaeos",
        "nodes": [
            {
                "id": 31,
                "title": "Magnis morbi orci",
                "nodes": []
            },
            {
                "id": 32,
                "title": "Ad tortor, auctor dui",
                "nodes": []
            },
            {
                "id": 33,
                "title": "Orci magnis, mauris",
                "nodes": []
            }
        ],
    }];

}



angular
	.module('luna')
	.directive('panelunit', ["$compile", panelunit])
	.directive('flottype', ["$compile", flottype])
	.directive('sparklinetype', ["$compile", sparklinetype])
	.directive('setlayout', ["$compile", setlayout])
	.directive('configzone', configZone)
	.directive('repeatope', Repeatope)
	.directive('navitem', navitem)
	.directive('navlist', navlist)
	.directive("contextmenu", ['$rootScope','$window', '$state', '$timeout','$cookies',contextMenu])
	.directive("checkuser",['$rootScope','UserLog','$state','$timeout',checkUser]);



function panelunit($compile) {
	return {
		restrict: 'CA',
		templateUrl: 'views/partial/panel.html',
		scope: true,
		link: function (scope, element, attrs) {
			var childscope = scope.$new();
			console.log(scope.item);
			//console.log("unitpanel width:"+$(element.closest("li")[0]).css("height"));
			/* var height=$(element.closest("li")[0]).css("height");
			scope.height=height;
			scope.$on('gridster-resized', function(){scope.height=height;});
	        scope.$on('gridster-item-resized', function(){scope.height=height;});
	        scope.$on('gridster-item-transition-end', function(){console.log(height);scope.height=height;}); */
			childscope.datasource = scope.item.content.data;
			childscope.chartFlotOptions = scope.item.content.option;
			var templateOfChild = "<div " + scope.item.content.type + " style='height:100%'></div>";
			var elementofbody = element.find(".panel-body");
			elementofbody.html($compile(templateOfChild)(childscope));
		}
	}
}

function flottype($compile) {
	return {
		templateUrl: 'views/partial/flottype.html',
		//scope:true,
		//replace:true,
		link: function (scope, element, attrs) {
			var height = $(element[0]).css("height");
			console.log("flottype height:" + height);
			var data1 = [[0, 16], [1, 24], [2, 11], [3, 7], [4, 10], [5, 15], [6, 24], [7, 30]];
			var data2 = [[0, 26], [1, 44], [2, 31], [3, 27], [4, 36], [5, 46], [6, 56], [7, 66]];
			scope.chartFlotData = [data2, data1];
			scope.dataoptions = [0, 1];
			scope.$watch('datasource', function () { scope.selecteddata = [scope.chartFlotData[scope.datasource]]; });
			scope.$on('configevent', function (event, targetscope) {
				if (scope === targetscope) {
					var template = "<div configZone></div>";
					$(".navigationright").html(template);
					$compile($(".navigationright").contents())(scope);
				}
			});

		}
	}
}

function sparklinetype($compile) {
	return {
		templateUrl: 'views/partial/sparklinetype.html',
		//scope:true,
		link: function (scope, element, attrs) {
			var data1 = [-8, 2, 4, 3, 5, 4, 3, 5, 5, 6, 3, 9, 7, 3, 5, 6, 9, 5, 6, 7, 2, 3, 9, 6, 6, 7, 8, 10, 15, 16, 17, 15]
			var data2 = [8, -2, -4, -3, -5, -4, -3, -5, -5, -6, -3, -9, -7, -3, -5, -20, -9, -5, -6, -7, -2, -3, -9, -6, -6, -7, -8, -10, -15, -16, -17, -15]
			scope.chartFlotData = [data1, data2];
			scope.dataoptions = [0, 1];
			console.log(scope);
			scope.$watch('datasource', function () { scope.selecteddata = scope.chartFlotData[scope.datasource]; });
			scope.$on('configevent', function (event, targetscope) {
				if (scope === targetscope) {
					var template = "<div configZone></div>";
					$(".navigationright").html(template);
					$compile($(".navigationright").contents())(scope);
				}
			});

		}
	}
}

function configZone() {
	return {
		//restrict: 'CA',
		//replace:true,
		templateUrl: 'views/partial/configzone.html',
		//scope:true,
		link: function (scope, element, attrs) {

		}
	}
}
/**
 * setlayout - set the type of layout for page
 */
function setlayout($compile) {
	return {
		restrict: 'A',
		//template:'<div ng-translude></div>',
		scope: true,
		translude: true,
		//replace:true,
		link: function (scope, element, attrs) {
			var model = {};
			model.panel = [];
			var panel1 = { id: 1, width: "col-lg-4", height: "133px" };
			panel1.content = { type: "sparkline", datasource: "selecteddata1", config: "chartOptions2" };
			var panel2 = { id: 2, width: "col-lg-8", height: "133px" };
			panel2.content = { type: "flot", datasource: "A", config: "A" };
			model.panel.push(panel1);
			model.panel.push(panel2);
			scope.model = model;
			for (var i = 0; i < scope.model.panel.length; i++) {
				childscope = scope.$new();
				childscope.model = scope.model.panel[i];
				console.log("setlayout.scope");
				console.log(scope);
				console.log("setlayout.childscope");
				console.log(childscope);
				var templateOfChild = "<div panel></div>";
				element.append($compile(templateOfChild)(childscope));
			}

		}
	}
}

function Repeatope() {
	return {
		restrict: "EA",
		//template:"<div ng-transclude></div>",
		//transclude:true,
		//scope:true,
		link: function (scope, element) {
			element.find("input").attr("readonly", "readonly");
			scope.isShow = false;
			// // $scope.isConfig="readonly";
			// // $scope.$watch('isConfig',function(newValue){
			// //     if(newValue){

			// //     }
			// // });
			scope.edit = function (contact) {
				if (contact) {
					element.find("input").removeAttr("readonly");
					scope.isShow = true;
					console.log(element);
				}
				else {
					// $scope.isEdit=true;
				}
			};


		}
	}
}

function navitem($compile) {
	return {
		restrict: "EA",
		templateUrl: "views/partial/navigationitem.html",
		link: function (scope, element, attrs) {
		}
	}
}

function navlist() {
	return {
		restrict: "EA",
		link: function (scope, element, attrs) {
			//scope.navList=[0];
		}
	}
}

function checkUser($rootScope,UserLog,$state,$timeout) {
	 return {
		link: function () {
			var listener = function (event, toState, toParams, fromState, fromParams) {
				// console.log("UserLog");
				// console.log(!UserLog.isLogged);
				// console.log("toState.name:"+toState.name);
				// console.log("$state.current.name:"+$state.current.name);
				// console.log("fromState.name:"+fromState.name);

				if((toState.name!='commonviews.login')&&(!UserLog.isLogged))
				{
					// console.log(UserLog);
					// console.log("跳转");
					$state.go('commonviews.login');

				}
				else{
					// console.log("不跳转");
					// console.log("fromState.name:"+fromState.name);
					// console.log("$state.current.name:"+$state.current.name);
				}
			
				// Default title
				// var title = 'LUNA | AngularJS Responsive WebApp';
				// // Create your own title pattern
				// if (toState.data && toState.data.pageTitle) title = 'LUNA | ' + toState.data.pageTitle;
				// $timeout(function () {
				// 	element.text(title);
				// });
			};
			$rootScope.$on('$stateChangeSuccess', listener);
			//console.log($rootScope);
		}
//
//   link: function (scope, elem, attrs, ctrl) {
// 			$root.$on('$stateChangeStart', function (event, currRoute, prevRoute) {
// 				if (!prevRoute.access.isFree && !userSrv.isLogged) {
// 					// reload the login route
// 				}
				/*
				* IMPORTANT:
				* It's not difficult to fool the previous control,
				* so it's really IMPORTANT to repeat the control also in the backend,
				* before sending back from the server reserved information.
				*/
			// });
		// }
	 }
}

function contextMenu($rootScope,$window, $state,$timeout,$cookies) {

	return {
		restrict: 'A',
		//require:'^?ngModel',

		link: function ($scope, element, attrs) {
			// console.log(toState);
			//console.log($stateParams);
			var opened = false;
			var menuElement = angular.element(document.getElementById(attrs.targetofmenu));
			function open(event, element) {
				$scope.opened = true;
				menuElement.css('top', event.clientY + 'px');
				menuElement.css('left', event.clientX + 'px');
			};
			function close(element) {
				$scope.opened = false;
			};
			$scope.opened = false;
			//重命名
			element.find("input").attr("readonly", "readonly");
			$scope.confirmshow = false;
			//每个项点击的事件
			$scope.fns = {
				"删除": function ($event) {
					//alert('删除');
					//console.log($rootScope.$state);
					var username=$cookies.get('username');
					var obj = { pageId: $scope.item.pageId, Id: username};
					console.log(obj);
					$timeout(function(){$state.go('main.dashboard')},50);
					$scope.delete(obj);
					//$state.go('main.versions',{},{reload:true});
					// $rootScope.$state.go('main.versions',undefined,{location:true});
					//$rootScope.$state=$state;
					//console.log("执行跳转");
				},
				"重命名": function ($event) {
					alert('重命名');
					element.find("input").removeAttr('readonly');
					$scope.confirmshow = true;

				}
			}
			$scope.confirm = function () {
				var obj = { pageId: $scope.item.pageId, Id: '001', pageAlias: $scope.item.pageAlias };
				console.log(obj);
				$scope.rename(obj);
				element.find("input").attr("readonly", "readonly");
				$scope.confirmshow = false;

			}
			$scope.ms = $scope.optionlist;

			$scope.fn = function ($event, sName) {

				/*
				 * 根据sName 来判断使用什么函数
				
				*/
				$scope.fns[sName]($event);

			}
			//显示右键菜单
			element.bind('contextmenu', function (event) {

				$scope.$apply(function () {

					event.preventDefault();

					open(event, menuElement);

				});

				$state.go('main.DemoForGridSter', { pageID: $scope.item.pageId });
			});
			//窗口绑定点击事件 隐藏右键菜单

			angular.element($window).bind('click', function (event) {


				if ($scope.opened) {
					$scope.$apply(function () {

						event.preventDefault();

						close(menuElement);


					});
				}
			});
		}
	};
}




/**
 *
 * dashboardCtrl
 *
 */

angular
    .module('luna')
    .controller('configzoneCtrl', configzoneCtrl);

function configzoneCtrl($scope){


    /**
     * Sparkline
     */

    var data3=[-8, 2, 4, 3, 5, 4, 3, 5, 5, 6, 3, 9, 7, 3, 5, 6, 9, 5, 6, 7, 2, 3, 9, 6, 6, 7, 8, 10, 15, 16, 17, 15]
	var data4=[8, -2, -4, -3, -5, -4, -3, -5, -5, -6, -3, -9, -7, -3, -5, -20, -9, -5, -6, -7, -2, -3, -9, -6, -6, -7, -8, -10, -15, -16, -17, -15]
	$scope.chartFlotData1={"data3":data3,"data4":data4};
	$scope.selecteddata1=data4;
    $scope.chartOptions2 = {
        type: 'line',
        lineColor: '#fff',
        lineWidth: 3,
        fillColor: '#393D47',
        height: 70,
        width: '100%'
    };

    
    /**
     * Flot
     */

    var data1 = [ [0, 16], [1, 24], [2, 11], [3, 7], [4, 10], [5, 15], [6, 24], [7, 30] ];
    var data2 = [ [0, 26], [1, 44], [2, 31], [3, 27], [4, 36], [5, 46], [6, 56], [7, 66] ];

    $scope.chartFlotData = [data2, data1];
	$scope.dataoptions=[0,1];
	$scope.$watch('datasource',function(){/* alert($scope.datasource); */console.log("flottype");console.log($scope);$scope.selecteddata=[$scope.chartFlotData[$scope.datasource]];});
	//$scope.selecteddata=[$scope.chartFlotData[$scope.datasource]];
	//$scope.selecteddata=[data1];
   /*  $scope.chartFlotOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 1
            }
        },
        grid: {
            tickColor: "#404652",
            borderWidth: 0,
            borderColor: '#404652',
            color: '#404652'
        },
        colors: [ "#f7af3e","#DE9536"]
    }; */

}
/**
 *
 * dashboardCtrl
 *
 */



angular
    .module('luna')
    .controller('DemoForGridSterCtrl', ['$scope', '$rootScope', 'Panels', 'UserConfigs', '$stateParams','$cookies', DemoForGridSterCtrl]);

function DemoForGridSterCtrl($scope, $rootScope, Panels, UserConfigs, $stateParams,$cookies) {
    //console.log("pageId:" + $stateParams.pageId);

    // var jsonStr;
    // UserConfigs.get({ Id: '001', pageId: $stateParams.pageID }, function (newValue) {
    //     //console.log(newValue.length);
    //     $scope.page = [];
    //     for (var i = 0; i < newValue.length; i++) {
    //         var modelobject = { model: {} };
    //         $scope.page.push(modelobject);
    //         console.log(i);
    //     }
    //     for (var i = 0; i < newValue.length; i++) {
    //         if (newValue[i].pageID == $stateParams.pageID) {
    //             jsonStr = newValue[i].Config;
    //             break;
    //         }
    //     }
    //     $scope.i = $stateParams.pageID;
    //     var obj = angular.fromJson(jsonStr);
    //     $scope.page[$scope.i].model = obj;
    // });
    // if ($rootScope.model) {
    //     $scope.model = $rootScope.model;
    // }
    // else {
    //     $scope.model = [
    //         {
    //             shape: { sizeX: 2, sizeY: 1, row: 0, col: 0 },
    //             content: {
    //                 // type: "flottype", data: 0, option: {
    //                 //     series: {
    //                 //         splines: {
    //                 //             show: true,
    //                 //             tension: 0.4,
    //                 //             lineWidth: 1,
    //                 //             fill: 1
    //                 //         }
    //                 //     },
    //                 //     grid: {
    //                 //         tickColor: "#404652",
    //                 //         borderWidth: 0,
    //                 //         borderColor: '#404652',
    //                 //         color: '#404652'
    //                 //     },
    //                 //     colors: ["#f7af3e", "#DE9536"]
    //                 // }
    //             }
    //         },
    //         {
    //             shape: { sizeX: 2, sizeY: 2, row: 1, col: 0 },
    //             content: {
    //                 // type: "flottype", data: 1,
    //                 // option: {
    //                 //     series: {
    //                 //         splines: {
    //                 //             show: true,
    //                 //             tension: 0.4,
    //                 //             lineWidth: 1,
    //                 //             fill: 1
    //                 //         }
    //                 //     },
    //                 //     grid: {
    //                 //         tickColor: "#404652",
    //                 //         borderWidth: 0,
    //                 //         borderColor: '#404652',
    //                 //         color: '#404652'
    //                 //     },
    //                 //     colors: ["#f7af3e", "#DE9536"]
    //                 // }
    //             }
    //         },
    //         //  { shape:{sizeX: 1, sizeY: 2, row: 0, col: 4},
    //         //     content:{type:"sparklinetype",data:0,option:{
    //         //         type: 'line',
    //         //         lineColor: '#fff',
    //         //         lineWidth: 3,
    //         //         fillColor: '#393D47',
    //         //         height: '70px',
    //         //         width: '100%'
    //         //     }}  },
    //         /*{shape:{sizeX: 1, sizeY: 1, row: 0, col: 5},
    //            content:{type:"flottype",data:[[ [0, 16], [1, 24], [2, 11], [3, 7], [4, 10], [5, 15], [6, 24], [7, 30] ]],option:{
    //                series: {
    //                    splines: {
    //                        show: true,
    //                        tension: 0.4,
    //                        lineWidth: 1,
    //                        fill: 1
    //                    }
    //                },
    //                grid: {
    //                    tickColor: "#404652",
    //                    borderWidth: 0,
    //                    borderColor: '#404652',
    //                    color: '#404652'
    //                },
    //                colors: [ "#f7af3e","#DE9536"]
    //            }}   } */
    //     ];

    //     //$scope.model=Panels.query();
    //     $rootScope.model = $scope.model;
    // }

    //console.log($scope.model);
    //console.log($rootScope.page[0]);
    var i = parseInt($stateParams.pageID);
    //console.log(i);
    angular.forEach($rootScope.page, function (data) {
        if (i == data.pageId) {
            $scope.model = data.model;
        }
    });
    //$scope.model=$rootScope.page[i].model;
    // console.log("$scope.model:");
    // console.log($scope.model);
    $scope.customItemMap = {
        sizeX: 'item.shape.sizeX',
        sizeY: 'item.shape.sizeY',
        row: 'item.shape.row',
        col: 'item.shape.col',
    };
    $scope.gridsterOpts = {
        columns: 12, // the width of the grid, in columns
        pushing: true, // whether to push other items out of the way on move or resize
        floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
        swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
        width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [10, 10], // the pixel distance between each widget
        outerMargin: true, // whether margins apply to outer edges of the grid
        sparse: false, // "true" can increase performance of dragging and resizing for big grid (e.g. 20x50)
        isMobile: false, // stacks the grid items if true
        mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
        mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
        minColumns: 1, // the minimum columns the grid must have
        minRows: 2, // the minimum height of the grid, in rows
        maxRows: 100,
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        minSizeX: 1, // minimum column width of an item
        maxSizeX: null, // maximum column width of an item
        minSizeY: 1, // minumum row height of an item
        maxSizeY: null, // maximum row height of an item
        resizable: {
            enabled: true,
            handles: ['se'],//往哪个方向拖拉，[北、东、南、西、东北、东南、西南、西北]
            start: function (event, $element, widget) { }, // optional callback fired when resize is started,
            resize: function (event, $element, widget) { }, // optional callback fired when item is resized,
            stop: function (event, $element, widget) { } // optional callback fired when item is finished resizing
        },
        draggable: {
            enabled: true, // whether dragging items is supported
            handle: '.panel-heading', // optional selector for drag handle class=“panel-heading”的元素可作为拖拉的作用点
            start: function (event, $element, widget) { }, // optional callback fired when drag is started,
            drag: function (event, $element, widget) { }, // optional callback fired when item is moved,
            stop: function (event, $element, widget) { } // optional callback fired when item is finished dragging
        }
    };

    $scope.clear = function () {
        $scope.model.splice(0, $scope.model.length);
        //$scope.model = [];

    };

    $scope.addWidget = function () {
        $scope.model.push({
            name: "New Widget",
            sizeX: 1,
            sizeY: 1
        });
    };

    $scope.save = function () {
        var jsonStr1 = angular.toJson($scope.model);
        var pageAlias;
        angular.forEach($rootScope.page, function (data) {
            if ($stateParams.pageID == data.pageId) {
                pageAlias = data.pageAlias;
            }
        });
        // console.log("pageAlias");
        // console.log(pageAlias);
        //var obj = { Id: "001",Config: jsonStr1 };
        var username=$cookies.get('username');
        //username=encodeURIComponent(username);
        var obj = { Id: username, pageId: $stateParams.pageID, pageAlias: pageAlias, Config: jsonStr1 };
        console.log("$scope.save obj");
        console.log(obj);
        obj = new UserConfigs(obj);
        console.log(obj);
        obj.$put();
        //  console.log(model);
        //  var jsonStr1=angular.toJson(model)
        //  console.log(jsonStr1);
        //  var obj={Id:"001",Config:jsonStr1};
        //  console.log(obj);
        //  obj=new UserConfigs(obj);
        //  console.log(obj);
        //  obj.$save();
    }
    //$scope.$watch('model',function(){console.log("DemoForGridSterCtrl's model:");console.log($scope.model);},true);

}
angular
    .module('luna')
    .controller('DemoForServerCtrl',['Contacts','$http','$scope','$rootScope','$timeout',DemoForServerCtrl]);
// angular
//     .module('luna')
//     .directive('Repeatope', Repeatope);

function DemoForServerCtrl(Contacts,$http,$scope,$rootScope,$timeout){
    $('input').css("BACKGROUND-COLOR", "transparent");
    $scope.text="";
    //$scope.isConfig=true;
    $scope.isEdit=false;
    $scope.contacts=Contacts.query();
    console.log($scope.contacts);
    //Contacts.get({id:'001'},function(contact){$scope.contact=contact[0]});
    $scope.delete=function(contact){
       contact.$delete();
       $timeout(function(){$scope.contacts=Contacts.query()},1000);
    };
    $scope.edit=function(contact){
       if(contact){
           $scope.contact=contact;
           $scope.isEdit=true;
       }
       else{
           $scope.isEdit=true;
       }

    };
    $scope.save=function(contact){
       if(!(contact instanceof Contacts)){
           contact=new Contacts(contact);
           contact.$save();        
        }
        else{
            contact.$put();
        
        }    
        $timeout(function(){$scope.contacts=Contacts.query()},1000);
        $scope.isEdit=false;
        $scope.contact=null;
    }
    $scope.cancel=function(){
        $scope.isEdit=false;
        $scope.contact=null;
    }

};

// function Repeatope(){
//     return{
//         link:function(scope,element){
//             scope.isShow=true;
//             // $scope.isConfig="readonly";
//             // $scope.$watch('isConfig',function(newValue){
//             //     if(newValue){

//             //     }
//             // });
//             $scope.edit=function(contact){
//                 if(contact){
//                     $scope.isShow=false;
//                     console.log($scope.isConfig);
//                 }
//                 else{
//                    // $scope.isEdit=true;
//                 }
//             };
            
//         }
//     }
// }
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


angular
  .module('luna').factory('Contacts', ['$resource',
    function ($resource) {
      return $resource('http://192.168.32.66:55868/api/contacts/:id', { id: '@Id' }, {
        // Let's make the `query()` method cancellable
        get: { method: 'get', isArray: true, cancellable: true },
        put: { method: 'put', isArray: true, cancellable: true }
      });
    }]).factory('Panels', ['$resource',
      function ($resource) {
        return $resource('http://localhost:55868/api/panels', {}, {
          // Let's make the `query()` method cancellable
          get: { method: 'get', isArray: true, cancellable: true },
          saveall: { method: 'post', isArray: true, cancellable: true }
        });
      }]).factory('UserConfigs', ['$resource',
        function ($resource) {
          return $resource('/api/UserConfigs', {},{
            // Let's make the `query()` method cancellable
            get: { method: 'Get', params:{id:'@Id'},isArray: false, cancellable: true },
            put: { method: 'Put', params: { id:"@Id",pageId: '@pageId', pageAlias: '@pageAlias', Config: '@Config' }, isArray: false, cancellable: true },
            save: { method: 'Post', params: { id:"@Id",pageId: '@pageId', Config: '@Config', pageAlias: '@pageAlias' }, isArray: false, cancellable: true },
            delete: { method: 'Delete', params: { id:"@Id",pageId: '@pageId' }, isArray: false, cancellable: true }
          });
        }]).factory('UserLog', function () {
          var sdo = {
            isLogged: false,
            username: ''
          };
          return sdo;
        }).factory('UserAuth', ['$resource',
        function ($resource) {
          return $resource('http://localhost:55868/api/UserAuth',  {
            // Let's make the `query()` method cancellable
            get: { method: 'GetUser', params:{username:'@username',password:"@password"},isArray:true, cancellable: true }
            // put: { method: 'Put', params: { pageId: '@pageId', pageAlias: '@pageAlias', Config: '@Config' }, isArray: false, cancellable: true },
            // save: { method: 'Post', params: { pageId: '@pageId', Config: '@Config', pageAlias: '@pageAlias' }, isArray: false, cancellable: true },
            // delete: { method: 'Delete', params: { pageId: '@pageId' }, isArray: false, cancellable: true }
          })}]);