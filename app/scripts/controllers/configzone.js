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