const { request, response } = require('express');
const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.send('wxmstg1')
})
app.get('/demo', (req, res) => {
    res.send('wxmstg2')
})
app.get('/picture', (req, res) => {
    res.sendFile(__dirname + '/public/demo.jpg')
})
app.post('/test', (request, response) => {
    console.log(request.body)
    response.send('ok')
})
app.listen(3000, function (err) {
    if (!err) console.log('ok');
    else console.log(err);
})
