const http = require("http");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req) {
    if (req.url == "/favicon.ico") return; //To ignore '/favicon.ico'
    const reqUrl = url.parse(req.url, true);
    console.log("Request Received with URL: ", reqUrl);
    switch (reqUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/search":
        res.end(
          `Your result for username ${reqUrl.query.username} is ..........`
        );

        break;
      case "/search/youtube":
        res.end(
          `Your search result for  ${reqUrl.query.username}'s video is ..........`
        );

        break;
      default:
        res.end("404 Page Not Found");
    }
  }
});

myServer.listen(434, () => {
  console.log("SERVER CONNECTED...");
});
