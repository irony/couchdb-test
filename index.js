// use memory caching
var nodeCouchDB = require('node-couchdb');
var couch = new nodeCouchDB(process.env.COUCHDB_HOST, 5984);
var express = require('express');
var app = express();

app.get('/', function(req, res){
  couch.get('dennispaketet', '1337', function (err, resData) {
    if (err) return res.send(err, 500);
    return res.json(resData);
  });
})

app.listen(3000);