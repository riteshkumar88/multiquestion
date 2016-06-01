sampleApp.controller('htmlQuiz_pg',function($scope,$location,$http,$routeParams){
	var quiz_model;
    var q_name;

    $scope.quiz_box = false;
    $scope.info_box = true;
    

     //Getting Data from server
        $http({
            url:"/getQuestion",
            data:{q_name:q_name},
            method:"POST"
        }).success(
            function(res,textStatus){
                //console.log(res)
                 $scope.quiz_model = res;
                 quiz_model =  $scope.quiz_model;

                var next = 0;
                $scope.current_q = quiz_model[next];

                $scope.prev_btn = false ;

                 $scope.next_btn = true;
                 $scope.result_btn = false;
                 var user_ans = [];//User Ans will be stored here
                 $scope.u_ans = '';//user ans are upated in this model var
                 var ans_given = false;
                 $scope.change_q = function(state){

                 var next_btn=next+1;
                 var prev_btn=next-1;

                 switch(state)
                 {
                 case "next":
                 if(!$scope.u_ans){
                 $scope.err_message = "Please Select Any answer to processed  forward";

                 }else{
                 $scope.current_q = quiz_model[next_btn];
                 next = next_btn;

                 var q_id =  quiz_model[next-1].id
                 var u_ans = $scope.u_ans;
                 ans_forward(q_id,u_ans);
                 $scope.u_ans = '';

                 $scope.err_message = '';
                 ans_given = !ans_given;
                 }
                 //console.log(q_id + "------"+quiz_model[next-1].q);


                 //console.log(next);
                 break;
                 case "prev":
                 $scope.current_q = quiz_model[prev_btn];
                 next = prev_btn;
                 console.log(quiz_model[prev_btn].id);
                 break;
                 }//Switch
                 check_status();


                 }//Solving the  uder request for next/prev questions
                 var check_status = function(){
                 if(ans_given == true){
                 if(next == 0){

                 $scope.prev_btn = true;
                 $scope.next_btn = true;
                 }else if(next< (quiz_model.length-1)){

                 $scope.prev_btn = true;
                 $scope.next_btn = true;
                 }else if((next+1) == quiz_model.length){

                 $scope.prev_btn = true;
                 $scope.next_btn = false;
                 //$scope.result_btn = true;
                 //console.log(quiz_model.length-1)
                 next--;


                 }//Showing and hiding next/prev button
                 ans_given = false

                 }//checking that user have choosen any answer or not


                 }// Checking the position of the user for button show and hide

    });