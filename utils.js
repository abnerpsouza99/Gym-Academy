module.exports = {
    age: function (timestamp) {
        // Criando novo objeto de data e inserindo na variável "today"
        const today = new Date()
        const birthDate = new Date(timestamp)

        // 2020 - 1984 = 35
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
        return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)
        // yyyy | UTC para Data Universal
        const year = date.getUTCFullYear()
        // mm
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        // dd
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}