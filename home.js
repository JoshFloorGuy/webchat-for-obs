var http = require('http')
var r = require('fs');
var irc = require('tmi.js');
var u = require('url');
var path=require('path');
function parseQuery(qstr) {
    var query = {};
    var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
    }
    return query;
}
var web = http.createServer(function(req,res){
	var x = u.parse(req.url,true).query;
	var stream = r.createReadStream(path.join(__dirname, u.parse(req.url,true).pathname));
    stream.on('error', function() {
        res.writeHead(404);
        res.end();
    });
    stream.pipe(res);
});
http.createServer(function(req,res){
	r.readFile('font.css', function(e,data) {
		res.writeHead(200, {'Content-Type': 'text/plain'})
		res.end(data)
	})
}).listen(8081);
var s = require('socket.io').listen(web);
s.on('connection', function(socket) {
	socket.emit('initi',{message:'pew!'})
	socket.on('init', function(data){
		var t = parseQuery(data.q)
		var re = require('request');
		re({url:'https://api.twitch.tv/kraken?client_id=gpxn705914tu18rq2w34wmzezdyry3&oauth_token='+t.oauth,json:true},function(err,res,dat){
			var user = ""
			if(!err && res.statusCode==200){user = dat.token.user_name}
			re({url:'https://api.twitch.tv/kraken/chat/'+user+'/badges?oauth_token='+t.oauth,json:true},function (error,response,body) {if(!error && response.statusCode===200){socket.emit('badges',body)}})
			r.readFile('constants.json','utf8',function(err,data){if(!err){socket.emit('constants',JSON.parse(data))}})
			if(t.channel==null) {t.channel=user}
			var client = new irc.client({connection:{cluster:"aws",reconnect:true},channels:[t.channel],identity:{username:user,password:"oauth:"+t.oauth}})
			client.connect();
			client.on('clearchat',function(channel){
				socket.emit('ref',{message:"sory"});
			})
			client.on('message', function(channel,userstat,messag,self){
				if(userstat['display-name']==null){userstat['display-name']=userstat['username'].charAt(0).toUpperCase() + userstat['username'].slice(1)}
				if(userstat['message-type']=='chat'){socket.emit('message',{m:messag,u:userstat,d:userstat['display-name']})}
			})
		})
	})
})
web.listen(8080);