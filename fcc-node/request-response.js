const http = require("http");

const server = http.createServer((req, res) => {

  // console.log("===> request");
  // console.log(req);
  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);

  console.log("===> response");
  // console.log(res);
  console.log(res.statusCode);

  // res.statusCode = 404;
  // console.log(res.statusCode);

  res.setHeader("content-type", "application/json");
  console.log(res.getHeaders());

  // res.end(req.url);
  res.end("End.");
});

const PORT = process.argv[2] || 3000;

server.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}...`)
});

