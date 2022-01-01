const express = require('express')
const jsonServer = require('json-server')
const server = jsonServer.create()
const app = express()
const router = express.Router()
const middlewares = jsonServer.defaults()


// Test route
app.get("/test", (req, res) => res.send({"msg": "hello"}))

// API
app.use('/api', jsonServer.router('db/db.json'))

app.listen(3000)