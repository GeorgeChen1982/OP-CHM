

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



