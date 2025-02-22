const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
    console.log("Please provide a file path.");
    process.exit(1);
}

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.log("Error reading file:", err.message);
        process.exit(1);
    }

    console.log(`File Size: ${stats.size} bytes`);
    console.log(`Creation Date: ${stats.birthtime}`);
    console.log(`Last Modified: ${stats.mtime}`);
});
