const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
// This code takes a command line argument, attempts to convert it to an integer