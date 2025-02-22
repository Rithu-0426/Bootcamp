// Access command-line arguments
const args = process.argv.slice(2);

// Convert arguments to numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if both inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers.");
} else {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
}
