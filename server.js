var express = require('express')
var serveStatic = require('serve-static')
//var hash = require('./pass').hash;
var bodyParser = require('body-parser');
var session = require('express-session');
//var serve = serveStatic('./dist', { 'index': ['index.html', 'index.htm'] });
var fs = require('fs');
var path=require('path');
var app = express();
var cookie=require("cookie");
var http=require('http');
var userconfig=require('./controllers/userconfig');

//app.use(serve);

var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     secret: 'shhhh, very secret'
// }));

app.use(function (req, res, next) {
  var nodeSSPI = require('node-sspi');
  var nodeSSPIObj = new nodeSSPI({
    retrieveGroups: true
  });
  nodeSSPIObj.authenticate(req, res
  , function(err){
    res.finished || next();
  }
  );
});

app.use(function(req,res,next){
     res.setHeader('Set-Cookie', cookie.serialize('username', req.connection.user, {
      //httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week 
    }));
    //console.log(req.connection.user);
    next();
});

// app.get('/login', function (req, res) {
//      res.render('login');
//  });
// app.get('/api/UserConfigs',function(req,res){
//     console.log("dd");
//     fetch(res,req.url);
// });

app.get('/api/UserConfigs',userconfig.get);
app.post('/api/UserConfigs',userconfig.post);
app.put('/api/UserConfigs',userconfig.put);
app.delete('/api/UserConfigs',userconfig.delete);

app.use(express.static(path.join(__dirname, 'app')));

//app.get();

// dummy database

var users = {
    tj: { name: 'tj' }
};

// app.get('/api/UserConfigs',function(req,res){
//     console.log("dd");
//     fetch(res,req.url);
// });
// function fetch(res,ResPath){
//  urlOpts = {host: '192.168.32.66', path: '/api/UserConfigs', port: '55868'};
//  if(ResPath){
//     urlOpts.path=ResPath;
// }

// http.get(urlOpts, function (response) {
//   response.on('data', function (chunk) {
//     res.end(chunk);
//   });
// }).on('error', function (e) {
//   console.log('error:' + e.message);
// });
// }

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
