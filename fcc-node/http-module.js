const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("New request!");
  res.end("Hello http!");
});

const PORT = process.argv[2] || 3000;

server.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}...`)
});
