const express = require('express')
const server = express()
const nunjucks = require("nunjucks")
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

/* This const is responsable for routes. (Import the routes of routes.js) */
const routes = require('./routes')

server.use(express.urlencoded({extended: true}))
server.use(express.static('public/styles'))
server.use(express.static('public/scripts'))
// Recebe o método por "_method=" e trata para usá-lo posteriormente
server.use(methodOverride('_method'))

server.use(routes)

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