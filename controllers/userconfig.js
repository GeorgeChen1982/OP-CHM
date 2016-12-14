var http = require('http');
var https=require('https');
var url=require('url');

var urlOpts = { host: '192.168.1.71', path: '/api/UserConfigs', port: '8080', rejectUnauthorized: false};
exports.get = function (req, res) {
    var urlOpt=urlOpts;
    urlOpt.method='GET';
    if (req.url) {
        urlOpt.path = req.url;
    }

    http.get(urlOpt, function (response) {
        response.on('data', function (chunk) {
            res.end(chunk);
        });
    }).on('error', function (e) {
        console.log('error:' + e.message);
    });
}
exports.post = function (req, res) {
    var urlOpt=urlOpts;
    urlOpt.method = 'POST';
    var urlobj=url.parse(req.url);
    urlOpt.path = urlobj.pathname;
    var request = http.request(urlOpt, function (response) {
        response.on('data', function (chunk) {
            console.log(chunk.toString());
        });
    }).on('error', function (e) {
        console.log('error:' + e.stack);
    });
    request.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    request.write(urlobj.query);
    request.end();
}
exports.put = function (req, res) {
    console.log("put");
    var urlOpt=urlOpts;
    urlOpt.method = 'PUT';
    var urlobj=url.parse(req.url);
    urlOpt.path = urlobj.pathname;
    var request = http.request(urlOpt, function (response) {
        response.on('data', function (chunk) {
            console.log(chunk.toString());
        });
    }).on('error', function (e) {
        console.log('error:' + e.stack);
    });
    request.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    request.write(urlobj.query);
    request.end();
}
exports.delete=function(req,res){
    console.log(req.url);
    console.log(req.body);
    var urlOpt=urlOpts;
    urlOpt.method='delete';
    if (req.url) {
        urlOpt.path = req.url;
    }
     var request = http.request(urlOpt, function (response) {
        response.on('data', function (chunk) {
            console.log(chunk.toString());
        });
    }).on('error', function (e) {
        console.log('error:' + e.stack);
    });
    request.end();

}
