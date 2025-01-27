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
  const urlSlug = req.params.slug;
  const sql = `SELECT 
        movies.*,
        IFNULL(AVG(reviews.vote), 0) AS average_vote
      FROM 
        movies
      LEFT JOIN 
        reviews ON movies.id = reviews.movie_id
      WHERE 
        movies.slug = ?
      GROUP BY 
        movies.id;`;

  connection.query(sql, [urlSlug], (err, movies) => {
    if (err) {
      return next(new Error(err.message));
    }

    return res.status(200).json({
      status: "success",
      data: movies,
    });
  });
}

module.exports = { index, show };
