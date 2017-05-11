var http = require('http');
var kanye = require('./kanye');

console.log(kanye);

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write("Kanye Lyric: " + kanye.kanyeLyrics[Math.floor(Math.random() * kanye.kanyeLyrics.length)] + " ");
  response.write("Kanye Quote: " + kanye.kanyeQuotes[Math.floor(Math.random() * kanye.kanyeQuotes.length)] + " ");
  response.write("Kanye Fact: " + kanye.kanyeFacts[Math.floor(Math.random() * kanye.kanyeFacts.length)] + " ");
  response.end();
}).listen(8080);
