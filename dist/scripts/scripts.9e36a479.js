function configState($stateProvider,$urlRouterProvider,$compileProvider,$httpProvider){$compileProvider.debugInfoEnabled(!0),$urlRouterProvider.otherwise("/commonviews/login"),$stateProvider.state("main",{"abstract":!0,url:"/main",resolve:{},templateUrl:"views/common/content.html"}).state("main.dashboard",{url:"/dashboard",templateUrl:"views/dashboard.html",data:{pageTitle:"Dashboard"}}).state("main.monitoring",{url:"/monitoring",template:"<div ui-view></div>"}).state("main.monitoring.metrics",{url:"/metrics",templateUrl:"views/monitoring/metrics.html",data:{pageTitle:"Metrics"}}).state("main.monitoring.usage",{url:"/usage",templateUrl:"views/monitoring/usage.html",data:{pageTitle:"Usage"}}).state("main.monitoring.activity",{url:"/activity",templateUrl:"views/monitoring/activity.html",data:{pageTitle:"Activity"}}).state("main.general",{url:"/general",template:"<div ui-view></div>"}).state("main.general.panels",{url:"/panels",templateUrl:"views/general/panels.html",data:{pageTitle:"Panels"}}).state("main.general.typography",{url:"/typography",templateUrl:"views/general/typography.html",data:{pageTitle:"Typography"}}).state("main.general.icons",{url:"/icons",templateUrl:"views/general/icons.html",data:{pageTitle:"Icons"}}).state("main.general.buttons",{url:"/buttons",templateUrl:"views/general/buttons.html",data:{pageTitle:"Buttons"}}).state("main.general.tabs",{url:"/tabs",templateUrl:"views/general/tabs.html",data:{pageTitle:"Tabs"}}).state("main.general.modals",{url:"/modals",templateUrl:"views/general/modals.html",data:{pageTitle:"Modals"}}).state("main.general.alerts",{url:"/alerts",templateUrl:"views/general/alerts.html",data:{pageTitle:"Alerts"}}).state("main.general.gridsystem",{url:"/gridsystem",templateUrl:"views/general/gridsystem.html",data:{pageTitle:"Grid system"}}).state("main.general.draggable",{url:"/draggable",templateUrl:"views/general/draggable.html",data:{pageTitle:"Draggable"}}).state("main.tables",{url:"/tables",template:"<div ui-view></div>"}).state("main.tables.tablestyles",{url:"/pantablestylesels",templateUrl:"views/tables/tablestyles.html",data:{pageTitle:"Table styles"}}).state("main.tables.datatables",{url:"/datatables",templateUrl:"views/tables/datatables.html",data:{pageTitle:"Datatables"}}).state("main.formelements",{url:"/formelements",templateUrl:"views/formelements.html",data:{pageTitle:"Form elements"}}).state("main.charts",{url:"/charts",template:"<div ui-view></div>"}).state("main.charts.flot",{url:"/flot",templateUrl:"views/charts/flot.html",data:{pageTitle:"Flot"}}).state("main.charts.sparkline",{url:"/sparkline",templateUrl:"views/charts/sparkline.html",data:{pageTitle:"Sparkline"}}).state("main.basic",{url:"/basic",template:"<div ui-view></div>"}).state("main.basic.list",{url:"/list",templateUrl:"views/basic/list.html",data:{pageTitle:"List"}}).state("main.basic.profile",{url:"/profile",templateUrl:"views/basic/profile.html",data:{pageTitle:"Profile"}}).state("main.basic.support",{url:"/support",templateUrl:"views/basic/support.html",data:{pageTitle:"Support"}}).state("main.basic.timeline",{url:"/timeline",templateUrl:"views/basic/timeline.html",data:{pageTitle:"Timeline"}}).state("commonviews",{"abstract":!0,url:"/commonviews",templateUrl:"views/common/blank.html",data:{specialClass:"blank"}}).state("commonviews.login",{url:"/login",templateUrl:"views/commonviews/login.html",controller:"loginctrl",data:{pageTitle:"Login"}}).state("commonviews.register",{url:"/register",templateUrl:"views/commonviews/register.html",data:{pageTitle:"Register"}}).state("commonviews.forgotpassword",{url:"/forgotpassword",templateUrl:"views/commonviews/forgotpassword.html",data:{pageTitle:"Forgot password"}}).state("commonviews.error",{url:"/error",templateUrl:"views/commonviews/error.html",data:{pageTitle:"Error"}}).state("main.versions",{url:"/versions",templateUrl:"views/versions.html",cache:!0,data:{pageTitle:"Versions"}}).state("main.Demo",{url:"/Demo",templateUrl:"views/Demo.html",data:{pageTitle:"Demo"}}).state("main.Demo1",{url:"/Demo1",templateUrl:"views/Demo1.html",data:{pageTitle:"Demo"}}).state("main.DemoForGridSter",{url:"/DemoForGridSter/:pageID",templateUrl:"views/DemoForGridSter.html",controller:"DemoForGridSterCtrl",cache:!1,data:{pageTitle:"DemoForGridSter"}}).state("main.DemoForServer",{url:"/DemoForServer",templateUrl:"views/DemoForServer.html",controller:"DemoForServerCtrl",data:{pageTitle:"DemoForServer"}})}function pageTitle($rootScope,$timeout){return{link:function(scope,element){var listener=function(event,toState,toParams,fromState,fromParams){var title="LUNA | AngularJS Responsive WebApp";toState.data&&toState.data.pageTitle&&(title="LUNA | "+toState.data.pageTitle),$timeout(function(){element.text(title)})};$rootScope.$on("$stateChangeStart",listener)}}}function minimalizaMenu($rootScope){return{restrict:"EA",template:'<div class="left-nav-toggle"><a href ng-click="minimalize()"><i class="stroke-hamburgermenu"></i> </a>',controller:function($scope,$element){$scope.minimalize=function(){$("body").toggleClass("nav-toggle")}}}}function sparkline(){return{restrict:"A",scope:{sparkData:"=",sparkOptions:"="},link:function(scope,element,attrs){scope.$watch("sparkData",function(){render()}),scope.$watch("sparkOptions",function(){render()});var render=function(){$(element).sparkline(scope.sparkData,scope.sparkOptions)};scope.$on("gridster-resized",render),scope.$on("gridster-item-resized",render),scope.$on("gridster-item-transition-end",render)}}}function panelTools($rootScope,$timeout,$compile){return{restrict:"A",scope:!0,templateUrl:"views/common/panel_tools.html",controller:function($scope,$element,$compile){$scope.showhide=function(){var hpanel=$element.closest("div.panel"),icon=$element.find("i:first"),body=hpanel.find("div.panel-body"),footer=hpanel.find("div.panel-footer");body.slideToggle(300),footer.slideToggle(200),icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),console.log(hpanel),hpanel.toggleClass("").toggleClass("panel-collapse"),$timeout(function(){hpanel.resize(),hpanel.find("[id^=map-]").resize()},50)},$scope.closebox=function(){var hpanel=$element.closest("div.panel");$rootScope.model.splice($rootScope.model.indexOf(hpanel.scope().item),1),console.log($rootScope.model)},$scope.showConfig=function(){$("body").toggleClass("config-toggle"),$("body").toggleClass("nav-toggle");var hpanel=$element.closest("div.panel"),body=hpanel.find("div.panel-body"),targetscope=body.children().scope();targetscope.$broadcast("configevent",targetscope),console.log($rootScope),$rootScope.$broadcast("gridster-resized")}}}}function navigationCtrl($scope,$rootScope,UserConfigs,$state,$cookies){$scope.isSelected=function(navId,navSelected){var activeRoute=$rootScope.$state.current.name,separateRoutes=activeRoute.split(".");return navSelected||(navSelected=separateRoutes[1]),navId!=navSelected&&($rootScope.$state.current.name.indexOf(navId)!=-1||navId!=navSelected)},$scope.page=$rootScope.page,$scope.addPage=function(){var Config=[],pageAlias="new page",maxId=0,i=1;angular.forEach($rootScope.page,function(data){pageAlias==data.pageAlias&&(pageAlias=i>1?"new page("+i++ +")":data.pageAlias+"("+i++ +")"),maxId<data.pageId&&(maxId=data.pageId)}),$rootScope.page.push({pageId:parseInt(maxId)+1,pageAlias:pageAlias,model:Config}),Config=angular.toJson(Config);var username=$cookies.get("username"),userConfig={Id:username,pageId:parseInt(maxId)+1,pageAlias:pageAlias,Config:Config};userConfig=new UserConfigs(userConfig),userConfig.$save()},$scope["delete"]=function(obj){angular.forEach($rootScope.page,function(data){obj.pageId==data.pageId&&$rootScope.page.splice($rootScope.page.indexOf(data),1)});var userConfig=new UserConfigs(obj);userConfig.$delete()},$scope.rename=function(obj){var jsonStr;angular.forEach($rootScope.page,function(data){obj.pageId==data.pageId&&(jsonStr=data.model)}),jsonStr=angular.toJson(jsonStr);var username=$cookies.get("username");obj={Id:username,pageId:obj.pageId,pageAlias:obj.pageAlias,Config:jsonStr},obj=new UserConfigs(obj),console.log(obj),obj.$put()}}function dashboardCtrl($scope){$scope.chartData1=[20,34,43,43,35,44,32,44,52,45],$scope.chartOptions1={type:"line",lineColor:"#FFFFFF",lineWidth:3,fillColor:"#404652",height:47,width:"100%"},$scope.chartData2=[-8,2,4,3,5,4,3,5,5,6,3,9,7,3,5,6,9,5,6,7,2,3,9,6,6,7,8,10,15,16,17,15],$scope.chartOptions2={type:"line",lineColor:"#fff",lineWidth:3,fillColor:"#393D47",height:70,width:"100%"},$scope.chartData3=[4,2],$scope.chartOptions3={type:"pie",sliceColors:["#f7af3e","#404652"]},$scope.chartData4=[3,2],$scope.chartOptions4={type:"pie",sliceColors:["#f7af3e","#404652"]},$scope.chartData5=[4,1],$scope.chartOptions5={type:"pie",sliceColors:["#f7af3e","#404652"]},$scope.chartData6=[3,5],$scope.chartOptions6={type:"pie",sliceColors:["#f7af3e","#404652"]},$scope.chartData7=[6,2],$scope.chartOptions7={type:"pie",sliceColors:["#f7af3e","#404652"]},$scope.chartData8=[10,34,13,33,35,24,32,24,52,35],$scope.chartOptions8={type:"line",lineColor:"#FFFFFF",lineWidth:3,fillColor:"#f7af3e",height:75,width:"100%"};var data1=[[0,16],[1,24],[2,11],[3,7],[4,10],[5,15],[6,24],[7,30]],data2=[[0,26],[1,44],[2,31],[3,27],[4,36],[5,46],[6,56],[7,66]];$scope.chartFlotData=[data2,data1],$scope.chartFlotOptions={series:{splines:{show:!0,tension:.4,lineWidth:1,fill:1}},grid:{tickColor:"#404652",borderWidth:0,borderColor:"#404652",color:"#404652"},colors:["#f7af3e","#DE9536"]}}function metricsCtrl($scope,$timeout){function getRandomData(){for(data.length>0&&(data=data.slice(1));data.length<totalPoints;){var prev=data.length>0?data[data.length-1]:50,y=prev+10*Math.random()-5.6;y<0?y=0:y>100&&(y=100),data.push(y)}for(var res=[],i=0;i<data.length;++i)res.push([i,data[i]]);return res}function update(){var newdata=[getRandomData()];$scope.chartData5=newdata,$timeout(update,updateInterval)}var data1=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,5],[7,6],[8,5],[9,4],[10,5],[11,4],[12,5],[13,6],[14,7],[15,6],[16,7],[17,15],[18,8],[19,7],[20,6],[21,6],[22,5],[23,6],[24,7],[25,6],[26,7],[27,5],[28,6],[29,5],[30,4],[31,5]],data2=[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,6],[8,5],[9,4],[10,5],[11,4],[12,5],[13,6],[14,7],[15,6],[16,7],[17,4],[18,4],[19,5],[20,6],[21,6],[22,5],[23,6],[24,7],[25,6],[26,3],[27,4],[28,5],[29,5],[30,4],[31,4]],data3=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,5],[7,6],[8,5],[9,4],[10,5],[11,4],[12,5],[13,6],[14,7],[15,6],[16,7],[17,3],[18,8],[19,7],[20,6],[21,6],[22,5],[23,6],[24,7],[25,6],[26,7],[27,5],[28,6],[29,5],[30,4],[31,22]],data4=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,5],[7,6],[8,3],[9,5],[10,6],[11,7],[12,8],[13,6],[14,7],[15,8],[16,9],[17,21],[18,20],[19,21],[20,21],[21,23],[22,22],[23,24],[24,22],[25,21],[26,22],[27,21],[28,20],[29,19],[30,20],[31,21]],chartUsersOptions={lines:{show:!0,fill:!1,lineWidth:2},yaxis:{min:0,max:70,tickSize:20},grid:{borderWidth:0}},chartUsersOptions2={lines:{show:!0,fill:!1,lineWidth:2},yaxis:{min:0,max:100,tickSize:20},grid:{tickColor:"#484C5A",borderWidth:0}};$scope.chartData1=[data1],$scope.chartOptions1=chartUsersOptions,$scope.chartData2=[data2],$scope.chartOptions2=chartUsersOptions,$scope.chartData3=[data3],$scope.chartOptions3=chartUsersOptions,$scope.chartData4=[data4],$scope.chartOptions4=chartUsersOptions;var data=[],totalPoints=300,updateInterval=120;$scope.chartData5=[data],$scope.chartOptions5=chartUsersOptions2,update()}function usageCtrl($scope,$timeout){function setUsage(){var usage=Math.floor(100*Math.random())+1;return usage}function update(){$scope.usage1=setUsage(),$scope.usage2=setUsage(),$scope.usage3=setUsage(),$scope.usage4=setUsage(),$scope.usage5=setUsage(),$scope.usage6=setUsage(),$scope.usage7=setUsage(),$scope.usage8=setUsage(),$scope.usage9=setUsage(),$timeout(update,updateInterval)}var updateInterval=800;update()}function activityCtrl($scope,$timeout){function simpleText(){for(var text="",possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",i=0;i<5;i++)text+=possible.charAt(Math.floor(Math.random()*possible.length));return text}function generateRow(){var now=new moment,endTime=now.format("HH:mm:ss a"),number0=Math.floor(100*Math.random())+1,number1=Math.floor(100*Math.random())+1,number2=Math.floor(100*Math.random())+1,number3=Math.floor(100*Math.random())+1,number4=Math.floor(100*Math.random())+1,number5=Math.floor(100*Math.random())+1,usage=Math.floor(100*Math.random())+1,jobid=number0+" AT_"+simpleText(),ip=number1+"."+number2+"."+number3+"."+number4,newRow={jobid:jobid,ip:ip,time:endTime,value:number5,usage:usage};return newRow}function mapChanges(){var random=Math.floor(100*Math.random())+1,random2=Math.floor(100*Math.random())+1,random3=Math.floor(100*Math.random())+1,random4=Math.floor(100*Math.random())+1,random5=Math.floor(100*Math.random())+1,usa="defaultFill",rus="defaultFill",aus="defaultFill",bra="defaultFill",ind="defaultFill";usa=random>50?"active":"defaultFill",rus=random2>50?"active":"defaultFill",aus=random3>50?"active":"defaultFill",bra=random4>50?"active":"defaultFill",ind=random5>50?"active":"defaultFill";var newData={USA:{fillKey:usa},RUS:{fillKey:rus},AUS:{fillKey:aus},BRA:{fillKey:bra},IND:{fillKey:ind}};return newData}function setUsage(){var usage=Math.floor(100*Math.random())+1;return usage}function update(){$scope.items.shift(),$scope.items.push(generateRow()),$scope.usage1=setUsage(),$scope.usage2=setUsage(),$scope.usage3=setUsage(),$scope.usage4=setUsage(),$scope.mapObject.data=mapChanges(),$timeout(update,updateInterval)}$scope.mapObject={scope:"world",fills:{defaultFill:"#3B3D46",active:"#F8A900"},responsive:!0,geographyConfig:{highlightOnHover:!1,borderWidth:0},data:{USA:{fillKey:"active"},RUS:{fillKey:"active"}}},$scope.items=[{jobid:" 43 AT_DFrtVs",ip:" 32.52.33.65",time:" 16:55:33 pm",value:" 34",usage:" 54"},{jobid:" 32 AT_TFVdw",ip:" 55.754.33.54",time:" 10:33:11 pm",value:" 32",usage:" 24"},{jobid:" 90 AT_etOFO",ip:" 322.98.33.165",time:" 11:21:53 pm",value:" 92",usage:" 12"},{jobid:" 43 AT_DFrtVs",ip:" 100.22.33.65",time:" 16:55:12 pm",value:" 79",usage:" 44"},{jobid:" 78 AT_IwbLP",ip:" 22.75.44.65",time:" 16:55:31 pm",value:" 21",usage:" 61"},{jobid:" 43 AT_DFrtVs",ip:" 12.98.67.124",time:" 12:23:61 pm",value:" 33",usage:"11"},{jobid:" 34 AT_nIidW",ip:" 32.52.33.65",time:" 10:43:65 pm",value:" 28",usage:" 32"},{jobid:" 03 AT_DFrtVs",ip:" 93.22.642.65",time:" 15:33:53 pm",value:" 85",usage:" 55"},{jobid:" 43 AT_eDsPO",ip:" 100.22.33.65",time:" 16:55:52 pm",value:" 79",usage:" 44"},{jobid:" 11 AT_DFrtVs",ip:" 22.75.44.65",time:" 16:55:32 pm",value:" 21",usage:" 61"},{jobid:" 66 AT_DFrtVs",ip:" 22.52.33.421",time:" 14:33:66 pm",value:" 93",usage:"71"},{jobid:" 43 AT_DFrtVs",ip:" 132.21.32.625",time:" 16:55:44 pm",value:" 32",usage:" 10"},{jobid:" 52 AT_NaJgS",ip:" 32.52.33.65",time:" 17:66:55 pm",value:" 34",usage:" 8"},{jobid:" 87 AT_KAmLM",ip:" 93.22.642.65",time:" 15:33:53 pm",value:" 85",usage:" 55"}];var updateInterval=800;update()}function modalCtrl($scope,$uibModal){$scope.openModal=function(){$uibModal.open({templateUrl:"views/modal/modal_example.html",controller:ModalInstanceCtrl})},$scope.openModal2=function(size){$uibModal.open({templateUrl:"views/modal/modal_example2.html",size:size,controller:ModalInstanceCtrl})}}function ModalInstanceCtrl($scope,$uibModalInstance){$scope.ok=function(){$uibModalInstance.close()},$scope.cancel=function(){$uibModalInstance.dismiss("cancel")}}function alertsCtrl($scope,toastr,toastrConfig){angular.extend(toastrConfig,{newestOnTop:!1,positionClass:"toast-bottom-right",preventDuplicates:!1,preventOpenDuplicates:!1,progressBar:!0}),$scope.pop2=function(){toastr.info("Info - This is a custom LUNA info notification",{})},$scope.pop3=function(){toastr.success("Success - This is a LUNA success notification",{})},$scope.pop1=function(){toastr.warning("Warning - This is a LUNA warning notification",{})},$scope.pop4=function(){toastr.error("Error - This is a LUNA error notification",{})}}function draggableCtrl($scope){$scope.sortableOptions={connectWith:".connectPanels",handler:".panel-body"}}function datatablesCtrl($scope,DTOptionsBuilder){$scope.dtOptions1=DTOptionsBuilder.newOptions().withDOM("t"),$scope.dtOptions2=DTOptionsBuilder.newOptions().withDOM("<'row'<'col-sm-6'l><'col-sm-6'f>>t<'row'<'col-sm-6'i><'col-sm-6'p>>").withDisplayLength(6),$scope.dtOptions3=DTOptionsBuilder.newOptions().withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp").withButtons([{extend:"csv",title:"ExampleFile",className:"btn-sm"},{extend:"pdf",title:"ExampleFile",className:"btn-sm"},{extend:"print",className:"btn-sm"}])}function flotChartsCtrl($scope){var data1=[[0,3],[1,6],[2,8],[3,9],[4,12],[5,14],[6,15],[7,12],[8,14],[9,12],[10,11],[11,10],[12,14],[13,16],[14,15],[15,15],[16,16],[17,12],[18,13],[19,15],[20,16],[21,18],[22,20],[23,23],[24,22],[25,21],[26,20],[27,17],[28,15],[29,14],[30,13],[31,10]];$scope.chartFlotData1=[data1],$scope.chartFlotOptions1={points:{show:!0,fill:!0,lineWidth:1,fillColor:"#f6a821"},grid:{borderWidth:0}},$scope.chartFlotData2=[data1],$scope.chartFlotOptions2={lines:{show:!0,fill:!1,lineWidth:2,fillColor:"#f6a821"},grid:{borderWidth:0}},$scope.chartFlotData3=[{label:"bar",data:[[1,12],[2,14],[3,18],[4,24],[5,28],[6,22],[7,20],[8,18],[9,17],[10,13],[11,15],[12,17]]}],$scope.chartFlotOptions3={bars:{show:!0,fill:!1,lineWidth:2,fillColor:"#f6a821"},legend:{show:!1},grid:{borderWidth:0}},$scope.chartFlotData4=[{label:"bar",data:[[1,12],[2,14],[3,18],[4,24],[5,28],[6,22],[7,20],[8,18],[9,17],[10,13],[11,15],[12,17]]}],$scope.chartFlotOptions4={lines:{show:!0,steps:!0},grid:{borderWidth:0}},$scope.chartFlotData5=[{data:[[1,4],[2,5],[3,7],[4,4],[5,8],[6,9],[7,11],[8,10],[9,8],[10,5],[11,4],[12,3]]}],$scope.chartFlotOptions5={series:{splines:{show:!0,tension:.4,lineWidth:2,fill:!1}},legend:{show:!1},grid:{borderWidth:0}},$scope.chartFlotData6=[{data:[[1,4],[2,5],[3,7],[4,4],[5,8],[6,9],[7,11],[8,10],[9,8],[10,5],[11,4],[12,3]]}],$scope.chartFlotOptions6={lines:{show:!0,fill:.1},grid:{borderWidth:0}}}function sparklinechartsCtrl($scope){$scope.chartData1=[34,43,43,35,44,32,44,52,25],$scope.chartOptions1={type:"line",lineColor:"#f6a821",fillColor:"#f6a821",width:"150",height:"20"},$scope.chartData2=[5,6,7,2,0,-4,-2,4],$scope.chartOptions2={type:"bar",barColor:"#f6a821",negBarColor:"#c6c6c6",width:"150",height:"20"},$scope.chartData3=[10,2],$scope.chartOptions3={type:"pie",sliceColors:["#f6a821","#ffffff"],width:"150",height:"20"},$scope.chartData4=[34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44],$scope.chartOptions4={type:"line",lineColor:"#f6a821",fillColor:"#f6a821",width:"150",height:"20"},$scope.chartData5=[1,1,0,1,-1,-1,1,-1,0,0,1,1],$scope.chartOptions5={type:"tristate",posBarColor:"#f6a821",negBarColor:"#ffffff",width:"150",height:"20"},$scope.chartData6=[4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7],$scope.chartOptions6={type:"discrete",lineColor:"#f6a821",width:"150",height:"20"}}function profileCtrl($scope){$scope.chartFlotData=[{data:[[1,4],[2,5],[3,7],[4,4],[5,8],[6,9],[7,11],[8,10],[9,8],[10,5],[11,4],[12,3]]}],$scope.chartFlotOptions={series:{splines:{show:!0,tension:.4,lineWidth:2,fill:!1}},legend:{show:!1},grid:{borderWidth:0}}}function listCtrl($scope){$scope.remove=function(scope){scope.remove()},$scope.toggle=function(scope){scope.toggle()},$scope.moveLastToTheBeginning=function(){var a=$scope.data.pop();$scope.data.splice(0,0,a)},$scope.newSubItem=function(scope){var nodeData=scope.$modelValue;nodeData.nodes.push({id:10*nodeData.id+nodeData.nodes.length,title:nodeData.title+"."+(nodeData.nodes.length+1),nodes:[]})},$scope.collapseAll=function(){$scope.$broadcast("collapseAll")},$scope.expandAll=function(){$scope.$broadcast("expandAll")},$scope.data=[{id:1,title:"Sem fringilla",nodes:[{id:11,title:"Nisl lacus et, ultricies",nodes:[{id:111,title:"Congue hac",nodes:[]}]},{id:12,title:"Consectetuer orci mollis",nodes:[]}]},{id:2,title:"Gravida morbi non",nodes:[{id:21,title:"Lorem aliquam",nodes:[]},{id:22,title:"Inceptos nibh",nodes:[]}]},{id:3,title:"Pede hymenaeos",nodes:[{id:31,title:"Magnis morbi orci",nodes:[]},{id:32,title:"Ad tortor, auctor dui",nodes:[]},{id:33,title:"Orci magnis, mauris",nodes:[]}]}]}function panelunit($compile){return{restrict:"CA",templateUrl:"views/partial/panel.html",scope:!0,link:function(scope,element,attrs){var childscope=scope.$new();console.log(scope.item),childscope.datasource=scope.item.content.data,childscope.chartFlotOptions=scope.item.content.option;var templateOfChild="<div "+scope.item.content.type+" style='height:100%'></div>",elementofbody=element.find(".panel-body");elementofbody.html($compile(templateOfChild)(childscope))}}}function flottype($compile){return{templateUrl:"views/partial/flottype.html",link:function(scope,element,attrs){var height=$(element[0]).css("height");console.log("flottype height:"+height);var data1=[[0,16],[1,24],[2,11],[3,7],[4,10],[5,15],[6,24],[7,30]],data2=[[0,26],[1,44],[2,31],[3,27],[4,36],[5,46],[6,56],[7,66]];scope.chartFlotData=[data2,data1],scope.dataoptions=[0,1],scope.$watch("datasource",function(){scope.selecteddata=[scope.chartFlotData[scope.datasource]]}),scope.$on("configevent",function(event,targetscope){if(scope===targetscope){var template="<div configZone></div>";$(".navigationright").html(template),$compile($(".navigationright").contents())(scope)}})}}}function sparklinetype($compile){return{templateUrl:"views/partial/sparklinetype.html",link:function(scope,element,attrs){var data1=[-8,2,4,3,5,4,3,5,5,6,3,9,7,3,5,6,9,5,6,7,2,3,9,6,6,7,8,10,15,16,17,15],data2=[8,-2,-4,-3,-5,-4,-3,-5,-5,-6,-3,-9,-7,-3,-5,-20,-9,-5,-6,-7,-2,-3,-9,-6,-6,-7,-8,-10,-15,-16,-17,-15];scope.chartFlotData=[data1,data2],scope.dataoptions=[0,1],console.log(scope),scope.$watch("datasource",function(){scope.selecteddata=scope.chartFlotData[scope.datasource]}),scope.$on("configevent",function(event,targetscope){if(scope===targetscope){var template="<div configZone></div>";$(".navigationright").html(template),$compile($(".navigationright").contents())(scope)}})}}}function configZone(){return{templateUrl:"views/partial/configzone.html",link:function(scope,element,attrs){}}}function setlayout($compile){return{restrict:"A",scope:!0,translude:!0,link:function(scope,element,attrs){var model={};model.panel=[];var panel1={id:1,width:"col-lg-4",height:"133px"};panel1.content={type:"sparkline",datasource:"selecteddata1",config:"chartOptions2"};var panel2={id:2,width:"col-lg-8",height:"133px"};panel2.content={type:"flot",datasource:"A",config:"A"},model.panel.push(panel1),model.panel.push(panel2),scope.model=model;for(var i=0;i<scope.model.panel.length;i++){childscope=scope.$new(),childscope.model=scope.model.panel[i],console.log("setlayout.scope"),console.log(scope),console.log("setlayout.childscope"),console.log(childscope);var templateOfChild="<div panel></div>";element.append($compile(templateOfChild)(childscope))}}}}function Repeatope(){return{restrict:"EA",link:function(scope,element){element.find("input").attr("readonly","readonly"),scope.isShow=!1,scope.edit=function(contact){contact&&(element.find("input").removeAttr("readonly"),scope.isShow=!0,console.log(element))}}}}function navitem($compile){return{restrict:"EA",templateUrl:"views/partial/navigationitem.html",link:function(scope,element,attrs){}}}function navlist(){return{restrict:"EA",link:function(scope,element,attrs){}}}function checkUser($rootScope,UserLog,$state,$timeout){return{link:function(){var listener=function(event,toState,toParams,fromState,fromParams){"commonviews.login"==toState.name||UserLog.isLogged||$state.go("commonviews.login")};$rootScope.$on("$stateChangeSuccess",listener)}}}function contextMenu($rootScope,$window,$state,$timeout,$cookies){return{restrict:"A",link:function($scope,element,attrs){function open(event,element){$scope.opened=!0,menuElement.css("top",event.clientY+"px"),menuElement.css("left",event.clientX+"px")}function close(element){$scope.opened=!1}var menuElement=angular.element(document.getElementById(attrs.targetofmenu));$scope.opened=!1,element.find("input").attr("readonly","readonly"),$scope.confirmshow=!1,$scope.fns={"删除":function($event){var username=$cookies.get("username"),obj={pageId:$scope.item.pageId,Id:username};console.log(obj),$timeout(function(){$state.go("main.dashboard")},50),$scope["delete"](obj)},"重命名":function($event){alert("重命名"),element.find("input").removeAttr("readonly"),$scope.confirmshow=!0}},$scope.confirm=function(){var obj={pageId:$scope.item.pageId,Id:"001",pageAlias:$scope.item.pageAlias};console.log(obj),$scope.rename(obj),element.find("input").attr("readonly","readonly"),$scope.confirmshow=!1},$scope.ms=$scope.optionlist,$scope.fn=function($event,sName){$scope.fns[sName]($event)},element.bind("contextmenu",function(event){$scope.$apply(function(){event.preventDefault(),open(event,menuElement)}),$state.go("main.DemoForGridSter",{pageID:$scope.item.pageId})}),angular.element($window).bind("click",function(event){$scope.opened&&$scope.$apply(function(){event.preventDefault(),close(menuElement)})})}}}function configzoneCtrl($scope){var data3=[-8,2,4,3,5,4,3,5,5,6,3,9,7,3,5,6,9,5,6,7,2,3,9,6,6,7,8,10,15,16,17,15],data4=[8,-2,-4,-3,-5,-4,-3,-5,-5,-6,-3,-9,-7,-3,-5,-20,-9,-5,-6,-7,-2,-3,-9,-6,-6,-7,-8,-10,-15,-16,-17,-15];$scope.chartFlotData1={data3:data3,data4:data4},$scope.selecteddata1=data4,$scope.chartOptions2={type:"line",lineColor:"#fff",lineWidth:3,fillColor:"#393D47",height:70,width:"100%"};var data1=[[0,16],[1,24],[2,11],[3,7],[4,10],[5,15],[6,24],[7,30]],data2=[[0,26],[1,44],[2,31],[3,27],[4,36],[5,46],[6,56],[7,66]];$scope.chartFlotData=[data2,data1],$scope.dataoptions=[0,1],$scope.$watch("datasource",function(){console.log("flottype"),console.log($scope),$scope.selecteddata=[$scope.chartFlotData[$scope.datasource]]})}function DemoForGridSterCtrl($scope,$rootScope,Panels,UserConfigs,$stateParams,$cookies){var i=parseInt($stateParams.pageID);angular.forEach($rootScope.page,function(data){i==data.pageId&&($scope.model=data.model)}),$scope.customItemMap={sizeX:"item.shape.sizeX",sizeY:"item.shape.sizeY",row:"item.shape.row",col:"item.shape.col"},$scope.gridsterOpts={columns:12,pushing:!0,floating:!0,swapping:!1,width:"auto",colWidth:"auto",rowHeight:"match",margins:[10,10],outerMargin:!0,sparse:!1,isMobile:!1,mobileBreakPoint:600,mobileModeEnabled:!0,minColumns:1,minRows:2,maxRows:100,defaultSizeX:2,defaultSizeY:1,minSizeX:1,maxSizeX:null,minSizeY:1,maxSizeY:null,resizable:{enabled:!0,handles:["se"],start:function(event,$element,widget){},resize:function(event,$element,widget){},stop:function(event,$element,widget){}},draggable:{enabled:!0,handle:".panel-heading",start:function(event,$element,widget){},drag:function(event,$element,widget){},stop:function(event,$element,widget){}}},$scope.clear=function(){$scope.model.splice(0,$scope.model.length)},$scope.addWidget=function(){$scope.model.push({name:"New Widget",sizeX:1,sizeY:1})},$scope.save=function(){var pageAlias,jsonStr1=angular.toJson($scope.model);angular.forEach($rootScope.page,function(data){$stateParams.pageID==data.pageId&&(pageAlias=data.pageAlias)});var username=$cookies.get("username"),obj={Id:username,pageId:$stateParams.pageID,pageAlias:pageAlias,Config:jsonStr1};console.log("$scope.save obj"),console.log(obj),obj=new UserConfigs(obj),console.log(obj),obj.$put()}}function DemoForServerCtrl(Contacts,$http,$scope,$rootScope,$timeout){$("input").css("BACKGROUND-COLOR","transparent"),$scope.text="",$scope.isEdit=!1,$scope.contacts=Contacts.query(),console.log($scope.contacts),$scope["delete"]=function(contact){contact.$delete(),$timeout(function(){$scope.contacts=Contacts.query()},1e3)},$scope.edit=function(contact){contact?($scope.contact=contact,$scope.isEdit=!0):$scope.isEdit=!0},$scope.save=function(contact){contact instanceof Contacts?contact.$put():(contact=new Contacts(contact),contact.$save()),$timeout(function(){$scope.contacts=Contacts.query()},1e3),$scope.isEdit=!1,$scope.contact=null},$scope.cancel=function(){$scope.isEdit=!1,$scope.contact=null}}function pageCtrl($scope){$scope.addPage=function($state,$rootScope){console.log($state)}}function loginCtrl($rootScope,$scope,$state,UserLog,UserAuth){$scope.username="",$scope.password="";var User;$scope.login=function(){console.log("start"),UserAuth.get({username:$scope.username,password:$scope.password},function(newValue){User=newValue,console.log(User),console.log(),$scope.username==User.Name&&$scope.password==User.HashedPassword?(UserLog.username=$scope.username,UserLog.isLogged=!0,$state.go("main.dashboard"),console.log("success"),console.log(UserLog)):(console.log("failure"),console.log(UserLog))})}}!function(){angular.module("luna",["ui.router","ui.bootstrap","angular-flot","datamaps","ngAnimate","toastr","ui.sortable","datatables","datatables.buttons","ui.tree","gridster","ngResource","ngCookies"])}(),angular.module("luna").config(configState).run(function($rootScope,$state,UserConfigs,$cookies,$http){$rootScope.$state=$state;var jsonStr,username=$cookies.get("username");$rootScope.username=username,console.log(username),UserConfigs.Id=username,UserConfigs.query({Id:username},function(newValue){$rootScope.page=[];for(var i=0;i<newValue.length;i++){var modelobject={pageId:0,model:{}};console.log("ID:"),console.log(newValue[i].ID),$rootScope.page.push(modelobject),jsonStr=newValue[i].Config;var obj=angular.fromJson(jsonStr);$rootScope.page[i].model=obj,$rootScope.page[i].pageId=newValue[i].pageID,$rootScope.page[i].pageAlias=newValue[i].pageAlias}})}),angular.module("luna").directive("pageTitle",pageTitle).directive("minimalizaMenu",minimalizaMenu).directive("sparkline",sparkline).directive("panelTools",["$rootScope","$compile",panelTools]),angular.module("luna").controller("navigationCtrl",["$scope","$rootScope","UserConfigs","$state","$cookies",navigationCtrl]),angular.module("luna").controller("dashboardCtrl",dashboardCtrl),angular.module("luna").controller("metricsCtrl",metricsCtrl),angular.module("luna").controller("usageCtrl",usageCtrl),angular.module("luna").controller("activityCtrl",activityCtrl),angular.module("luna").controller("modalCtrl",modalCtrl),angular.module("luna").controller("alertsCtrl",alertsCtrl),angular.module("luna").controller("draggableCtrl",draggableCtrl),angular.module("luna").controller("datatablesCtrl",datatablesCtrl),angular.module("luna").controller("flotChartsCtrl",flotChartsCtrl),angular.module("luna").controller("sparklinechartsCtrl",sparklinechartsCtrl),angular.module("luna").controller("profileCtrl",profileCtrl),angular.module("luna").controller("listCtrl",listCtrl),angular.module("luna").directive("panelunit",["$compile",panelunit]).directive("flottype",["$compile",flottype]).directive("sparklinetype",["$compile",sparklinetype]).directive("setlayout",["$compile",setlayout]).directive("configzone",configZone).directive("repeatope",Repeatope).directive("navitem",navitem).directive("navlist",navlist).directive("contextmenu",["$rootScope","$window","$state","$timeout","$cookies",contextMenu]).directive("checkuser",["$rootScope","UserLog","$state","$timeout",checkUser]),angular.module("luna").controller("configzoneCtrl",configzoneCtrl),angular.module("luna").controller("DemoForGridSterCtrl",["$scope","$rootScope","Panels","UserConfigs","$stateParams","$cookies",DemoForGridSterCtrl]),angular.module("luna").controller("DemoForServerCtrl",["Contacts","$http","$scope","$rootScope","$timeout",DemoForServerCtrl]),angular.module("luna").controller("pageCtrl",["$scope","$rootScope","$state",pageCtrl]),angular.module("luna").controller("loginctrl",["$rootScope","$scope","$state","UserLog","UserAuth",loginCtrl]),angular.module("luna").factory("Contacts",["$resource",function($resource){return $resource("http://192.168.32.66:55868/api/contacts/:id",{id:"@Id"},{get:{method:"get",isArray:!0,cancellable:!0},put:{method:"put",isArray:!0,cancellable:!0}})}]).factory("Panels",["$resource",function($resource){return $resource("http://localhost:55868/api/panels",{},{
get:{method:"get",isArray:!0,cancellable:!0},saveall:{method:"post",isArray:!0,cancellable:!0}})}]).factory("UserConfigs",["$resource",function($resource){return $resource("/api/UserConfigs",{},{get:{method:"Get",params:{id:"@Id"},isArray:!1,cancellable:!0},put:{method:"Put",params:{id:"@Id",pageId:"@pageId",pageAlias:"@pageAlias",Config:"@Config"},isArray:!1,cancellable:!0},save:{method:"Post",params:{id:"@Id",pageId:"@pageId",Config:"@Config",pageAlias:"@pageAlias"},isArray:!1,cancellable:!0},"delete":{method:"Delete",params:{id:"@Id",pageId:"@pageId"},isArray:!1,cancellable:!0}})}]).factory("UserLog",function(){var sdo={isLogged:!1,username:""};return sdo}).factory("UserAuth",["$resource",function($resource){return $resource("http://localhost:55868/api/UserAuth",{get:{method:"GetUser",params:{username:"@username",password:"@password"},isArray:!0,cancellable:!0}})}]);