const http = require('http');

const hostname = 'localhost';
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
    console.log(req.headers); // Logging the header information
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html> <body> <h1>Hello, Learners!</h1> </body> </html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});