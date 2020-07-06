const fs = require('fs')
const data = require('./data.json')

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
    const created_at = Date.now()
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

