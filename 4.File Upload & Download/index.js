const express = require('express')
var multer = require('multer')
const app = express()
const port = 3000

// Saving a file
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
});

// Reading a file by key
const upload = multer({ storage }).single('avatar');

// API
app.post('/upload', upload, (req, res) => {
    res.send('success')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))