const http = require('http');
const fs = require('fs');

require('./webSocket');

const PORT = 3000;

const FILE_READ_OPTIONS = { encoding: 'utf8', flag: 'r' }

const index = fs.readFileSync('./client/index.html', FILE_READ_OPTIONS);
const js = fs.readFileSync('./client/script.js', FILE_READ_OPTIONS);
const css = fs.readFileSync('./client/style.css', FILE_READ_OPTIONS);

const app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index.replace('/* SERVER_INJECT_CSS */', css).replace('/* SERVER_INJECT_JS */', js));
});

app.listen(PORT);