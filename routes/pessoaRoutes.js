const router = require('express').Router()

const Pessoa = require('../models/Pessoa')

// Rotas da API
router.post('/', async (req, res) => {

    // req.body
    const {
        nome,
        sobrenome,
        nacionalidade,
        cep,
        estado,
        cidade,
        logradouro,
        email,
        telefone,
        cpf
    } = req.body

    if(!nome || !sobrenome || !nacionalidade || !cep || !estado || !cidade || !logradouro || !email || !telefone || !cpf) {
        res.status(422).json({error: 'É necessária a inserção de todos os dados.'})
    }

    const pessoa = {
        nome,
        sobrenome,
        nacionalidade,
        cep,
        estado,
        cidade,
        logradouro,
        email,
        telefone,
        cpf
    }

    // Create
    try {

        // Criando os dados
        await Pessoa.create(pessoa)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

module.exports = router