/* This file is responsable for routes in the site */

const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

routes.get('/', function(req, res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res){
    return res.render('instructors/index')
})

routes.get('/members', function(req, res){
    return res.render('members')
})

routes.get('/instructors/create', function(req, res){
    return res.render('instructors/create')
})

// Desta forma, recebe-se o id pela rota
routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', instructors.edit)

routes.put('/instructors', instructors.put)

routes.post("/instructors", instructors.post)

routes.delete("/instructors", instructors.delete)

module.exports = routes