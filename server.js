const http = require("http");

const port = 8081;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`<h1>Hello </h1>`);
    response.end();
  })

  .listen(port, () => {
    console.log(`Node.js server started on ${port}`);
  });
//  http://Localhost:8081
