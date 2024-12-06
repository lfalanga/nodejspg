"use strict";
const fs = require('fs');
const path = require('path');
const folder = process.argv[2];
const ext = "." + process.argv[3];

// console.log(`__dirname: ${__dirname}, folder: ${folder}, ext: ${ext}`);

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
