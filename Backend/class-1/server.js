const http = require("http")





//create server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome");
    } else if (req.url === "/service") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Service");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Resource Not Found");
    }
  });
  
  // listen server
  const port = 4000;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });