// Importo la libreria nativa di Node
const http = require("http");

//BONUS
// Importo libreria 'The Office'
const episodes = require("the-office");

// Importo e avvio libreria dotenv
require("dotenv").config();

// Richiamo la porta da .env e inserisco un'altra come fallback
let port = +process.env.PORT || 3000;

// Funzioni
// function random(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
// function getRandomQuote() {
//   const quotes = [
//     "Il successo è l'abilità di andare da un fallimento all'altro senza perdere l'entusiasmo.",
//     "La tua unica limitazione è tu stesso.",
//     "Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi",
//     "Ogni giorno è una nuova opportunità per cambiare la tua vita.",
//     "Niente è impossibile, la parola stessa dice 'Io sono possibile'. - Audrey Hepburn",
//     "Il fallimento è l'opportunità di cominciare di nuovo, con maggiore intelligenza. - Henry Ford",
//     "Il successo è camminare da un fallimento all'altro senza perdere l'entusiasmo. - Winston Churchill",
//     "Sogna in grande e osa fallire. - Norman Vaughan",
//     "Il successo non è definitivo, il fallimento non è fatale: ciò che conta è il coraggio di continuare. - Winston Churchill",
//     "Ogni giorno è una seconda possibilità. - Ritu Ghatourey",
//   ];

//   const random = Math.floor(Math.random() * quotes.length);
//   return quotes[random];
// }
function getRandomQuote() {
  const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)];
  const firstScene = randomEpisode.scenes[0];
  const randomLine = firstScene[0].line;
  return randomLine;
}

function htmlResponse(res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const randomQuote = getRandomQuote();
  res.end(`<h1>${randomQuote}</h1>`);
}

// Creo il server
const server = http.createServer(function (req, res) {
  htmlResponse(res);
});

// Avvio il server
server.listen(port, function () {
  console.log("Server is running on http:/localhost:" + port);
});
