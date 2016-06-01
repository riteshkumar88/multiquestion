var sampleApp = angular.module("myApp",[])
    .config(['$routeProvider',function($routeProvider,$location){
    	$routeProvider
             .when('/takeQuiz_pg',{
                 templateUrl:'views/htmlQuiz_pg.html',
                 controller:'htmlQuiz_pg'
             })
             .otherwise({
                 redirectTo:"/"
             })
             }]);//Config

    sampleApp.controller('navController',function($scope,$location,$http){
    //var id = sessionStorage.id;

    /*if(!id){
       console.log("not found"+id)
       $scope.inBtn = true;
        $scope.outBtn = false;
        $scope.message = "";
    }else{
        console.log("found"+id)
        $scope.inBtn = false;
        $scope.outBtn = true;
        $http({
            url:"/getUserInfo",
            data:{u_id:id},
            method:"POST"
        }).success(function(res,textStatus){
                $scope.message = res.u_name;

            }).error(
            function(){ console.log("Error");}
        )//Error
    }
*/
    $scope.go = function (path){
        $location.path('/takeQuiz_pg');
    }

});
