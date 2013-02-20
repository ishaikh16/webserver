
	var express = require('express');
	var app = express();
	var port = process.env.PORT || 4848;
	var.use(express.static(__dirname + '/public'));
	app.listen(port);
   
