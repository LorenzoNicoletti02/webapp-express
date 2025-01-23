// Importo il file della connessione al database
const connection = require("../db");

// Definiamo le callback per gli endpoint. Codice che viene  eseguito ad un URL specifico
function index(req, res) {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, movies) => {
    if (err) {
      return next(new Error(err.message));
    }

    return res.status(200).json({
      status: "success",
      data: movies,
    });
  });
}

function show(req, res) {
  res.json("Endpoint show");
}

module.exports = { index, show };
