//var lowNumber = prompt("What's your low number?");
//lowNumber = parseInt(lowNumber);
//var highNumber = prompt("What's your high number?");
//highNumber = parseInt(highNumber);
//
//var randomNumber = Math.floor(Math.random() * (highNumber + 1) + (lowNumber + 1);
//
//alert("Your random number is " + lowNumber + " and " + highNumber + " is " + randomNumber);


var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + (bottomNumber + 1);
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + "</p>";
document.write(message);