// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); 

// Routes \\
app.get('/', function(req, res){
  res.sendFile('/html/index.html', { root: './public'})
});

app.get('/index.html', function(req, res){
  res.sendFile('/html/index.html', { root: './public'})
});

app.get("/about.html",function(request,response){
	response.sendFile("/html/about.html",{root:"./public"})
})

app.get("/teachers.html",function(request,response){
	response.sendFile("/html/teachers.html",{root:"./public"})
})

app.get("/local.html",function(request,response){
	response.sendFile("/html/local.html",{root:"./public"})
})

app.get("/contact.html",function(request,response){
	response.sendFile("/html/contact.html",{root:"./public"})
})


// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

})