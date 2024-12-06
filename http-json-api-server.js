"use strict";
const http = require('http');

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime(time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parseURL = new URL(req.url, "http://example.com");
  const time = new Date(parseURL.searchParams.get("iso"));
  let result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parseTime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixTime(time);
  }

  if (result) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
