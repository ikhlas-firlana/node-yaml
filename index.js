const yml = require('yaml');
const fs = require('fs');
const file = fs.readFileSync('./example/file.yml', 'utf8');
console.log(JSON.stringify(yml.parse(file)));