const fs = require('fs')
const data = require('./data.json')
const Intl = require('intl')
// Desestruturando objeto do utils.js, pegando o atributo age
const { age, date } = require('./utils')

// Show
exports.show = function(req, res) {
    // req.params.id = /:id
    // Desestruturando req.params
    const {id} = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return id == instructor.id
    })

    if(!foundInstructor){
        return res.send('Instructor not found!')
    }
    
    const instructor = {
        // Spread Operator: Serve para trazer tudo de foundInstructor
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","), // Split serve para transformar uma String em Array | Insere o item a cada vírgula
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at) // Salva a data atual
    }    

    return res.render("instructors/show", {instructor})
}

// Create
exports.post = function(req, res){
    
    // Cria um Array com as chaves do objeto
    const keys = Object.keys(req.body)

    // Validação de envio dos dados antes de os enviar ao Banco de Dados
    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Please, fill the fields!')
        }
    }

    // Desestruturar objeto
    let {avatar_url, birth, name, services, gender, id} = req.body


    birth = Date.parse(birth)
    const created_at = new Intl.DateTimeFormat('pt-BR').format(Date.now)
    // Incremento do id
    id = Number(data.instructors.length + 1)

    
    // Adiciona o req.body no Array em data.json
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if(err){
            return res.send("Write file error!")
        }
        return res.redirect("/instructors")
    })
}

// Edit

exports.edit = function(req, res) {
    const {id} = req.params
    const foundInstructor = data.instructors.find(function(instructor){
        return id == instructor.id
    })

    if(!foundInstructor){
        return res.send('Instructor not found!')
    }

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render('instructors/edit', {instructor: instructor})
}

