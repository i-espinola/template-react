
// Express server
// To run in production
const setup = require('./setup')
const http = require('http')
const favicon = require('express-favicon')
const express = require('express')
const path = require('path')

const app = express()
const index = path.join(setup.path, setup.public, setup.file)

app.use(favicon(setup.path + setup.favicon))
app.use(express.static(setup.path))
app.use(express.static(path.join(setup.path, setup.public)))
app.get(setup.request, (req, res) => res.sendFile(index))

// Start Serve
var server = http.createServer(app)
server.listen(setup.port, () => console.log(`${setup.banner} ${setup.port}`))
