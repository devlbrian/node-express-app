import http from "http";

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello World!");
};

const server = http.createServer(requestHandler);

server.listen(7777, (err) => {
  if (err) {
    return console.log("An error occurred:", err);
  }
  console.log("Server is listening on http://localhost:7777");
});
