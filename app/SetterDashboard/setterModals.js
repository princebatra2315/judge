var mongoose = require('mongoose');

mongoose.connect('mongodb://codeshala:codeshala123@ds125862.mlab.com:25862/judge')

var db = mongoose.connect

var ProgrammingQuestionSchema = mongoose.Schema({

name: {
	type: String
},
statement: {
	type: String
},
input_type: {
	type: String
},
output_type: {
	type: String
},
constraint: {
    type: String
},
level: {
	type: String
},
editorial: {
	type: String
},
sample_input: {
	type: String
},
sample_output: {
	type: String
},
correct_answer: {
	type: String
},
sample_explanation: {
	type: String
},
time_limit: {
	type: Number
},
max_marks: {
	type: Number
},
tags: {
	type: String
},
attempted: {
	type: Number
},
input_test_cases: {
	type: Array
},
output_test_cases: {
	type: Array
}
});
var ProgrammingQuestion = module.exports = mongoose.model('ProgrammingQuestion',ProgrammingQuestionSchema);
module.exports.createProgrammingQuestion = function(newProgrammingQuestion,callback){
	console.log("in dbutils");
	console.log(newProgrammingQuestion);
	var temp= new ProgrammingQuestion(newProgrammingQuestion);
	temp.save(callback);
}