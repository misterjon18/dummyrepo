const http = require("http");
const port = 3000;
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (error) => {
  if (error) {
    console.log(`Something went wrong ${error}`);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});

//******************** */

// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/homepage") {
//     res.end("Welcome to our homepage");
//   }
//   if (req.url === "/about") {
//     res.end("Here is our short history");
//   }
//   res.end(`
//   <h1>Oops !</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>`);
// });

// server.listen(port);
