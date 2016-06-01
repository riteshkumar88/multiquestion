
var mongoose = require('mongoose');
//mongoose.connect('mongodb://root:admin@ds021731.mlab.com:21731/quizlab');
mongoose.connect('mongodb://localhost:27017/multiquestion');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
   console.log("db connected");
});

var QuestionSchema = mongoose.Schema({
    question : String,
    a_1: String,
    a_2: String,
    a_3: String,
    a_4: String,
    r_a: String,
    q_name: String
});

var resultSchema = mongoose.Schema({
    u_id : String,
    quiz_name: String,
    userResult: String,
    date:String
});

//var User = mongoose.model('Users',userSchema);
var Question = mongoose.model('Questions',QuestionSchema);
var Result = mongoose.model('Results',resultSchema);

exports.getQuestion = function(req,res){
    var q_name = req.body.q_name;
    q_name = q_name.toLowerCase();
    //console.log(q_name);
    Question.find({ q_name: q_name },function(err,data){
        if (err) {// ...
            console.log('An error has occurred');

            res.send('An error has occurred'+err);

        }
        else {
            if(!data){
                console.log('record not found');

                res.send("error");

            }else{
           //     console.log("data == "+data);
                res.send(data);
            }//else  for data forward

        }//Main else

    })//FindOne funtionx;
};
