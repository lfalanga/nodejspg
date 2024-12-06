'use strict'

const fs = require('fs');
const filepath = process.argv[2];
const buf = fs.readFileSync(filepath);
const lines = buf.toString().split('\n').length - 1;

console.log(lines);