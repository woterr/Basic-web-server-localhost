const express = require("express");
const app = express();

const port = 3000;

app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.sendFile("main.html", { root: __dirname });
});

app.listen(parseInt(port, 10), () => {
  console.log(`Now running on port http://localhost:${port}`);
});
