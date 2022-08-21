const http = require("http");

const port = 8081;

const todoList = ["Complete Node byte", "Play Cricket"];

http
  .createServer((request, response) => {
    const { method, url } = request;

    if (url === "/todo") {
      if (method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(todoList.toString());
      } else if (method === "POST") {
        let body = "";
        request
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body = body + chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            console.log(body);
          });
      } else {
        response.writeHead(404);
      }
    } else {
      response.writeHead(404);
    }

    response.end();
  })

  .listen(port, () => {
    console.log(`Node.js server started on ${port}`);
  });
//  http://Localhost:8081
