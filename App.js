// Preso da doc expressjs
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./routes/movieRoutes");

//aggiungi il cors e mettigli la porta di react
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
