var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}



while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );
  attempts += 1;
}

document.write('<p>The random number was: ' + randomNumber + '</p>');
document.write('<p>It took the computer ' + attempts + ' attempts to get it right.</p>');








//
//var counter = 0;
//while ( counter < 10 ) {
//   var randNum = randomNumber(6);
//   document.write(randNum + ' ');
//   counter += 1;
//}