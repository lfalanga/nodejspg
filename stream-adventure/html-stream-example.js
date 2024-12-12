const fs = require("fs");
const input = fs.createReadStream("input.html");
const trumpet = require("trumpet");
const tr = trumpet();
const through = require('through2');

input.pipe(tr).pipe(process.stdout);

const loud = tr.select('.loud').createStream();
loud.pipe(through(function(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(loud);
