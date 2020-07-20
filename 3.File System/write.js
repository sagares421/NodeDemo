const fs = require('fs');

let student = {
    name: 'Damera Sagar',
    gender: 'Male',
};

let data = JSON.stringify(student, null, 2);

fs.writeFile('json/new.txt', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('END');