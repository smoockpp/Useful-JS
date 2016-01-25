var lowNumber = prompt("What's your low number?");
lowNumber = parseInt(lowNumber);
var highNumber = prompt("What's your high number?");
highNumber = parseInt(highNumber);

var randomNumber = Math.floor(Math.random() * highNumber) + lowNumber;

alert("Your random number is " + lowNumber + " and " + highNumber + " is " + randomNumber);