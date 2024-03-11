const http = require("node:http"); //Inport thư viện
const hostname = "127.0.0.1"; // Localhost
const port = 3000; //Cổng lằng nghe server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.write("<h1>Node Js - Bài 1</h1>");
  res.write("<br/>");
  res.write("<p>Tạo project Hello word bằng node js</p>");
  res.write("<p>Nguyễn Tất Công</p>");
  res.write(`<h1>HTML 5 Discriptions1</h1>
  <h1>HTML 5 Discriptions2</h1>
  <h1>HTML 5 Discriptions3</h1>`);
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
