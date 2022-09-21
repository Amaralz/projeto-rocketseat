import express from 'express'

const app = express()

//localhost:3333/ads

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name:'anuncio 1'},
        {id: 2, name:'anuncio 2'},
        {id: 3, nome:'anuncio 3'},
        {id: 4, nome:'anuncio 4'},
    ])
})

app.listen(3333)