var express = require('express');
var app = express();
var fs = require("fs");

//var id = 2;

app.get('/deleteUser', function (req, res) {
	var userd = req.param('userid');
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + userd];
       
       console.log( userd );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})