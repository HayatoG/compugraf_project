//Configuração Inicial
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
  }

// Forma de ler Json / Middlewares
app.use(
    express.urlencoded({
        extended: true
    }),
    cors(corsOptions)
)

app.use(express.json())

// Rotas da API
const pessoaRoutes = require('./routes/rotasPessoa')

app.use('/pessoa', pessoaRoutes)

// Rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({message: 'Teste'})
})

// Entregar uma porta
mongoose
    .connect('mongodb://localhost')
    .then(() => {
        console.log("Conectamos ao MongoDB")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
