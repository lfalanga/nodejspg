"use strict";
const filterFn = require("./mymodule.js");
const folder = process.argv[2];
const ext = process.argv[3];

// console.log(`__dirname: ${__dirname}, folder: ${folder}, ext: ${ext}`);

filterFn(folder, ext, function (err, list) {
  if (err) return console.error(err);

  list.forEach(function (file) {
    console.log(file);
  })
});
