const express = require("express");
const path = require("path");

// Running PORT is set automatically by App Engine
const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, "/dist/tl-fe/browser");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/tl-fe/browser/index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
