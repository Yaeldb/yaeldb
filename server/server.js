const express = require('express')
const jsonServer = require('json-server')
const server = jsonServer.create()
const app = express()
const router = express.Router()

server.use()

// Test route
app.get("/test", (req, res) => res.send({"msg": "hello"}))

app.listen(3000)


/*
var express = require('express');
var jsonServer = require('json-server');

var server = express();
// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
server.use('/api', jsonServer.router('db.json'));

server.listen(3000);
*/