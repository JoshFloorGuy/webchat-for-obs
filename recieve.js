var http = require('http')
var r = require('fs');

var web = http.createServer(function(req,res){
	r.readFile('got.html',function(error,data){
		if (error) throw error;
	res.writeHead(200,{'Content-Type':'text/html'})
	res.write(data)
	res.end()})
}).listen(8082)