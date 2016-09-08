var chalk = require("chalk");

var message = chalk.bold.blue("Hello ") + chalk.yellow("World");

var scary = chalk.bold.red("NICE TO SEE YOU");
console.log(message);
console.log(scary);