const http = require("http");

require("dotenv").config();

let port = +process.env.PORT || 3000;

// Functions
function htmlResponse(res, content) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(content);
}

// Creo il server
const server = http.createServer(function (req, res) {
  htmlResponse(res, "<h1> Hello World </h1>");
});

// Avvio il server
server.listen(port, function () {
  console.log("Server is running on http:/localhost:" + port);
});
