const fs = require('fs');
const jsonData = fs.readFileSync('script1.json', 'utf-8');
const resume = JSON.parse(jsonData);
console.log(resume);
