//Configuração Inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Forma de ler Json / Middlewares
app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

// Rotas da API
const pessoaRoutes = require('./routes/pessoaRoutes')

app.use('/pessoa', pessoaRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {

    //Mostrar req

    res.json({message: 'Uepa'})
})

// Entregar uma porta
mongoose
    .connect('mongodb://localhost')
    .then(() => {
        console.log("Conectamos ao MongoDB")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
