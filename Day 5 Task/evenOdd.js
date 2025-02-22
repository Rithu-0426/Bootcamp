// Access the command-line argument
const args = process.argv.slice(2);

// Convert argument to a number
const num = parseInt(args[0]);

// Check if the input is a valid number
if (isNaN(num)) {
    console.log("Please provide a valid number.");
} else {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
