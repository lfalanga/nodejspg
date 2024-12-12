const { request } = require("http");

const options = { method: "POST" };
const url = "http://localhost:8099"
const req = request(url, options, (res) => {
  res.pipe(process.stdout)
});

process.stdin.pipe(req);
