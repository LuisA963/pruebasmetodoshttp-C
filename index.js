const express = require('express')

const app = express()

//http://localhost:3000/
app.get('/', (request, response) => {
    response.send("Hello GET!")
})

app.get('/', (request, response) => {
    response.send("Hello POST!")
})

app.get('/', (request, response) => {
    response.send("Hello PUT!")
})

app.get('/', (request, response) => {
    response.send("Hello PATCH!")
})

app.get('/', (request, response) => {
    response.send("Hello DELETE!")
})



app.listen(3000, () => {console.log('listening on port 3000')})