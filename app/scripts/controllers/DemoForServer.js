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