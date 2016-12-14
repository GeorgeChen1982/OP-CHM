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