const mongoose = require('mongoose')

const Pessoa = mongoose.model('Pessoa', {
    nome: String,
    sobrenome: String,
    nacionalidade: String,
    cep: String,
    estado: String,
    cidade: String,
    logradouro: String,
    email: String,
    telefone: String,
    cpf: String
})

module.exports = Pessoa