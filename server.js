var express = require("express");
var app     = express();
var path    = require("path");


var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.listen(8080,function(){
  console.log("Started on PORT 8080");
})

app.use("/css", express.static(__dirname + '/css'));

app.use("/audio", express.static(__dirname + '/audio'));

app.use("/js", express.static(__dirname + '/js'));

app.use("/images", express.static(__dirname + '/images'));

app.use(express.static(__dirname + '/views'));

app.use("/product_json", express.static(__dirname + '/product_json'));

app.use("/fonts", express.static(__dirname + '/fonts'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/finishBuying',function(req,res){
	res.send(req.body.address);
});	