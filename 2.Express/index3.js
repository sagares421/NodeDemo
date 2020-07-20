const express = require('express')
const app = express()
const port = 3000

var auth = function (req, res, next) {
    if (req.headers.authorization === 'test_token') {
        next()
    } else {
        res.status(400).json('Unauthorised')
    }
}

app.use(auth)

app.get('/', (req, res) => res.status(200).json({ massage: 'Hello World!' }))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))