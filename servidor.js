const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.listen(8081, () => {console.log('Rodando Servidor')})

app.get('/parOuImpar', (req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*')
    const recebeu = req.query.numero;
    console.log('recebeu', recebeu)
    let clique = recebeu;
    console.log(clique, typeof(clique))
    ++clique
    resp.send({
        resposta: {
            funcionando: 'funcionando',
            click: clique
        }
    })
    
})