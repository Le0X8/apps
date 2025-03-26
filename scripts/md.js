const fs = require('fs');

console.log(fs.readdirSync('.'));
fs.writeFileSync('./test.txt', 'Hello, world!');