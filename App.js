// Preso da doc expressjs
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/movieRoutes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/movies", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
