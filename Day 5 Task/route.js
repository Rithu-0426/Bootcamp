const http = require("http");

const PORT = 3000; // Ensure the correct port

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to the Home Page!");
    } else if (req.url === "/about") {
        res.end("This is the About Page.");
    } else if (req.url === "/contact") {
        res.end("Contact us at contact@example.com.");
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
