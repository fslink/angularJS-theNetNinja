var express = require('express');
var app = express();
var path = require('path');

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);
app.use(express.static('app/'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.listen(9000, function(){
	console.log('app listening on port 9000');
});
