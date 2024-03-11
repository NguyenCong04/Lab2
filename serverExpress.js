const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  console.log("Page Home");
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  console.log("Page Trang chủ");
  res.send(`<h1>Page Home Web</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
