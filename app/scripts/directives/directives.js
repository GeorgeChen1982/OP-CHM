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
