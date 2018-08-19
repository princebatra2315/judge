const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
const app = express();
app.use(busboy());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(busboyBodyParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

require('./SetterDashboard').init(app);
/*
require('./ContestDashboard').init(app);
require('./SolverDashboard').init(app);
*/
 
app.get('/', function (req, res) {
    res.render('index');
});

module.exports = app;