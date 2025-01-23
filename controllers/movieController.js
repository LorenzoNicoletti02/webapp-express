// Definiamo le callback per gli endpoint. Codice che viene  eseguito ad un URL specifico
function index(req, res) {
  res.json("Endpoint index");
}

function show(req, res) {
  res.json("Endpoint show");
}

module.exports = { index, show };
