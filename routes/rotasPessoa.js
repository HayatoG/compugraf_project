const router = require('express').Router()

const { application } = require('express')
const Pessoa = require('../models/Pessoa')

// Rotas da API
// Create - Criando os dados
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

    try {
        await Pessoa.create(pessoa)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso'})
        return
    } catch (error) {
        res.status(500).json({error: error})
    }

})

//Read - Lendo os dados
router.get('/', async (req, res) => {
    try {
        
        const pessoas = await Pessoa.find()

        res.status(200).json(pessoas)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

//Filtrando por pessoas

router.get('/:id', async (req, res) => {
    // Extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {

        const pessoa = await Pessoa.findOne({_id: id})

        if(!pessoa) {
            res.status(422).json({message: 'O usuário não foi encontrado'})
            return
        }

        res.status(200).json(pessoa)

    } catch (error) {
        res.status(500).json({error:error})
    }
})

//Update - atualizar dados (PUT, PATCH)
router.patch('/:id', async (req, res) => {
    
    const id = req.params.id

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

    try {

        const pessoaAtualizada = await Pessoa.updateOne({_id: id}, pessoa)

        if(pessoaAtualizada.matchedCount === 0) {
            res.status(422).json({message: 'O usuário não foi encontrado'})
            return
        }

        res.status(200).json(pessoa)

    } catch (error) {
        res.status(500).json({error:error})
    }

})

// Delete - Apagar dados
router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const pessoa = await Pessoa.findOne({_id: id})

    if(!pessoa) {
        res.status(422).json({message: 'O usuário não foi encontrado'})
        return
    }

    try {

        await Pessoa.deleteOne({_id: id})

        res.status(200).json({message: 'Usuário removido com sucesso!'})

    } catch (error) {
        res.status(500).json({error:error})
    }


})


module.exports = router