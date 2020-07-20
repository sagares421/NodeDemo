const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user/:id', (req, res) => {
    console.log("BODY", req.body);
    console.log("QUERY", req.query);
    console.log("PARAMS", req.params);
    console.log("HEADERS", req.headers);
    res.status(200).json('Hello World!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))