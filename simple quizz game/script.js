///* 
//The Random number Guessing Game
//Generates a number between 1 and 6
//and gives a player two attempts to
//guess the number.
//*/
//
//
//
//// assume the player didn't guess correctly
//var correctGuess = false;
//
//// generate random number from 1 to 6
//var randomNumber = Math.floor(Math.random() * 6 ) + 1;
//
//var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
//
///* test to see if player is
//1. correct
//2. guesses to high
//3. guessed too low
//*/
//if (parseInt(guess) === randomNumber ) {
//  correctGuess = true;
//} else if ( parseInt(guess) < randomNumber ) {
//  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
//  if ( parseInt(guessMore) === randomNumber ) {
//  correctGuess = true;
//  }
//} else if ( parseInt(guess) > randomNumber ) {
//  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);  
//  if ( parseInt(guessLess) === randomNumber ) {
//  correctGuess = true;
//  }
//}
//  
//  
///* test if player is correct and print message to the browser */
//if ( correctGuess ) {
//    document.write('<p>You guessed the number!</p>');
//} else {
//    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
//}



var correctAnswer = 0;

var guess1 = prompt('How many moons have the Earth?');
var guess2 = prompt('How many moons have Mars?');
var guess3 = prompt('How many known moons have Jupiter?');
var guess4 = prompt('How many moons have Saturn?');
var guess5 = prompt('How many moons have Neptune?');

if ( parseInt(guess1) === 1 ) {
  correctAnswer += 1; 
} 

if ( parseInt(guess2) === 2 ) {
  correctAnswer += 1; 
} 

if ( parseInt(guess3) === 63 ) {
  correctAnswer += 1; 
} 

if ( parseInt(guess4) === 53 ) {
  correctAnswer += 1; 
} 

if ( parseInt(guess5) === 13 ) {
  correctAnswer += 1; 
} 

document.write('<p>You have ' + correctAnswer + ' correct answers!</p>');

if ( correctAnswer === 5 ) {
  document.write('<p>You receive a Gold Crown!</p>');
} else if ( correctAnswer < 5 && correctAnswer > 2 ) {
  document.write('<p>You receive a Silver Crown!</p>');
} else if ( correctAnswer < 3 && correctAnswer > 0 ) {
  document.write('<p>You receive a Bronze Crown!</p>');
} else {
  document.write('<p>Sorry! No Crown for you at all!</p>');
}





















