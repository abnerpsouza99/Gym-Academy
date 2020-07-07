// Arquivo para conversão da data em idade

// Exemplo: 1573568256893

function age(timestamp){
    // Criando novo objeto de data e inserindo na variável "today"
    const today = new Date()
    const birthDate = new Date(timestamp)

    // 2020 - 1984 = 35
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
        age = age -1
    }
    return age
}