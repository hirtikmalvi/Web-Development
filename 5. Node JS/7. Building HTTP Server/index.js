const http = require("http");

const myServer = http.createServer((req, res) => {
  if (req) {
    if (req.url == "/favicon.ico") return; //To ignore '/favicon.ico'
    console.log("Request Received");
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/hirtikmalvi":
        res.end("this is profile of hirtikmalvi");

        break;
      case "/search":
        res.end("this is search page");

        break;
      default:
        res.end("404 Page Not Found");
    }
  }
  // res.end("Hello from Node JS");
});

myServer.listen(434, () => {
  console.log("SERVER CONNECTED...");
});
