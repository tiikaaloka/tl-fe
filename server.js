const express = require("express");
const path = require("path");

// Running PORT is set automatically by App Engine
const port = 80;
//const port = process.env.PORT || 4200;
const app = express();

const publicPath = path.join(__dirname, "/dist/tl-fe/browser");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/tl-fe/browser/index.html"));
});

app.listen(port, "0.0.0.0");
//() => {
  //console.log(`Server is up on ${port}`);
//});
