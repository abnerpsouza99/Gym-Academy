const express = require('express')
const server = express()
const nunjucks = require("nunjucks")

/* This const is responsable for routes. (Import the routes of routes.js) */
const routes = require('./routes')

server.use(routes)

server.use(express.static('public/styles'))
server.use(express.static('public/assets'))
server.use(express.static('src/scripts'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//server.use(function (req, res) {
//    res.status(404).render("not-found");
// });

// Comand to turn-on server
server.listen(5000, function () {
    console.log("Server is running!")
})