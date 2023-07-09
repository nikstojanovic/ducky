const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const extensions = require('./lib/constants/fileExtensions');

require('./webSocket');

const PORT = 3000;

const baseClientDirectory = './client';

const sendFile = (pathname, res, ext) => fs.readFile(pathname, function(err, data){
    if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
    } else {
        res.setHeader('Content-type', extensions[ext] || 'text/plain' );
        res.end(data);
    }
});

const app = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url);
    const parsedPathName = parsedUrl.pathname;
    let pathname = baseClientDirectory + parsedPathName;
    const ext = path.parse(pathname).ext;

    if (parsedPathName === '/') {
        sendFile(`${pathname}index.html`, res, '.html');
    }

    fs.open(pathname, 'r', function (err, fd) {
        if (err) {
            if (err.code === "ENOENT") {
                console.error('myfile does not exist');
                return;
            } else {
                throw err;
            }
        } else {
            sendFile(pathname, res, ext);
        }
    });
})

app.listen(PORT);