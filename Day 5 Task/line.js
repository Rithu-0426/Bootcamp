const fs = require("fs");

const [,, command, fileName] = process.argv;

if (command === "create" && fileName) {
    fs.writeFileSync(fileName, "");
    console.log(`Created: ${fileName}`);
} else if (command === "delete" && fileName) {
    fs.existsSync(fileName) ? (fs.unlinkSync(fileName), console.log(`Deleted: ${fileName}`)) : console.log("File not found.");
} else if (command === "list") {
    console.log("Files:", fs.readdirSync(".").join(", "));
} else {
    console.log("Usage: node my-tool.js <create|delete|list> <filename>");
}
