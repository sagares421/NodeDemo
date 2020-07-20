const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("BODY", req.body);
    console.log("QUERY", req.query);
    console.log("PARAMS", req.params);
    console.log("HEADERS", req.headers);
    res.status(200).json('Hello World!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))