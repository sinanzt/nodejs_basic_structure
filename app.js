
var express = require("express");
var path = require("path");
var app = express();
var router = require('./app/routes/route.ts');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next) {
    console.log("url:" + req.url);
    next();
});

app.use(router);

app.listen(4444);