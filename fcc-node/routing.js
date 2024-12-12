const http = require("http");
const courses = require("./courses");

const server = http.createServer((req, res) => {

  // routing: method and path
  const { method } = req; // sintaxis de desestructuracion
  let msg;

  // console.log(req.url);

  switch(method) {
    case "GET":
      return handleGetRequest(req, res);
    case "POST":
      return handlePostRequest(req, res);
    default:
      msg = `unhandled method: "${method}"`;
      console.log(msg);
      res.statusCode = 501;
      return res.end(msg);
  }

  // console.log("New request!");
  res.end("Hello routing!");
});

const PORT = process.argv[2] || 3000;

server.listen(PORT, () => {
  console.log(`Server listening at: http://localhost:${PORT}...`)
});

function handleGetRequest(req, res) {
  const path = req.url;
  let msg;

  if (path === "/") {
    // res.statusCode = 200;
    return res.end("home.");
  } else if (path === "/courses") {
    // res.statusCode = 200;
    // res.setHeader("content-type", "application/json");
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(JSON.stringify(courses.infoCourses));
  } else if (path === "/courses/programming") {
    // res.statusCode = 200;
    // res.setHeader("content-type", "application/json");
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(JSON.stringify(courses.infoCourses.programming));
  }

  msg = `unhandled path: "${path}"`;
  console.log(msg);
  res.statusCode = 404;
  return res.end(msg);

}

function handlePostRequest(req, res) {
  const path = req.url;
  let msg;

  if (path === "/courses/programming") {
    // res.statusCode = 200;
    let body = "";

    req.on("data", (content) => {
      body += content.toString();
      body = JSON.parse(body);
    });

    req.on("end", () => {
      console.log(body);
      console.log(typeof body);
      console.log(body.title);
      return res.end("received post request.");
    });

    // return res.end("received post request.");
  }
}
