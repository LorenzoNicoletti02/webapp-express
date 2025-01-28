// Preso da doc expressjs
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/movieRoutes");
const cors = require("cors");
require("dotenv").config();
// Rendo disponibile chiamata a server tramite cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

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
