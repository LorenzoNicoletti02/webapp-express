// Preso da doc expressjs
const express = require("express");
const app = express();
const port = 4000;
const router = require("./routes/movieRoutes");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/movies", router);

// Middleware per rotte non esistenti
app.use((req, res, next) => {
  res.status(404).send("Rotta non trovata");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
