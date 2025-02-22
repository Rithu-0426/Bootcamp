const http = require('http');

http.createServer((req, res) => {
    const routes = {
        '/': 'Welcome to Home Page!',
        '/about': 'About Page',
        '/contact': 'Contact us at contact@example.com'
    };

    res.end(routes[req.url] || '404 Not Found');
}).listen(3000, () => console.log('Server running at http://localhost:3000'));