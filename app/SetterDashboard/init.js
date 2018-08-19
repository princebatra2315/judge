let aws_upload = require('./aws');
let model = require("./setterModals");
var fs=require('fs');
function initSetter (app) {
    app.get('/setter', renderHome);

    app.post('/setter/upload',(req,res) => {
      console.log(req.body.name);
      console.log(req.body);
      console.log(req.body.input_test_cases);
      model.createProgrammingQuestion(req.body,(error,response)=>{
      	if(error)
      	{
      		console.log(error);
      	}
      	console.log("saved successfully");
      });
    });

    app.post('/setter/upload1',(req,res) => {
    	console.log("chl gya");
    	aws_upload(req.body.filename);
    	res.send({"res": "success"});
    })
}

function renderHome (req, res) {
    res.render('setterDashboard/setterView');
}
module.exports = initSetter;