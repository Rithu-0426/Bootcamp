const fs = require("fs");
const path = require("path");

function traverse(dir) {
    fs.readdirSync(dir).forEach(item => {
        const fullPath = path.join(dir, item);
        fs.statSync(fullPath).isDirectory() ? traverse(fullPath) : console.log(fullPath);
    });
}

const dirPath = process.argv[2] || ".";
traverse(dirPath); 
