const fs = require("fs").promises;

// Read a file
fs.readFile("input.txt", "utf8")
    .then(data => {
        console.log("File read successfully.");
        return data.toUpperCase(); // Convert content to uppercase
    })
    .then(processedData => {
        console.log("Processing done.");
        return fs.writeFile("output.txt", processedData); // Write to a new file
    })
    .then(() => {
        console.log("File written successfully to output.txt.");
    })
    .catch(err => {
        console.error("Error:", err);
    });