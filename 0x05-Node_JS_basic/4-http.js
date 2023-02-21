const  http = require('http');

const listen_port = 1245;
const hostname = 'localhost';
const response_text = 'Hello Holberton School!';
const app = http.createServer();

app.on((req, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Length', response_text.length)
    response.statusCodes = 200;
    response.write(Buffer.from(response_text))
});

app.listen(listen_port, hostname, () => {
    console.log(`Server running at http://${hostname}:${listen_port}\n`)
})

module.exports = app;
