var express = require("express");
var app = express();


app.get("/about", function(req, res){
	res.sendFile(__dirname+"/about.html");
});

app.get("/login", function(req, res){
	
});
app.get("/", function(req, res){
	// res.send("<h1>this is home page</h1>");
	res.sendFile(__dirname+"/home.html");
});


app.listen(3000, function(){
	console.log(__dirname);

	console.log('server running');
});

