

const express = require('express')
const dotenv = require('dotenv')

dotenv.config
const port = parseInt(process.env.port || 4242, 10)

const app = express()

app.get('/', (req, res)=> {
    res.json({
        hello: 'from Pokedex API'
    })
})

app.listen("8000", ()  =>{
    console.log("Server is listening on port ${port}")
})