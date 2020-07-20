const fs = require('fs');

fs.readFile('json/old.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('END');