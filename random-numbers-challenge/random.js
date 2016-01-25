
function getRandomNumber(lower, upper) {
 if ( isNaN(lower) || isNaN(upper) ) {
     throw new Error('Both arguments must be numbers');
 }
 return Math.floor(Math.random() * (upper-lower+1) + lower);
}

document.write('<h1>Your number is ' + getRandomNumber(20, 100) + '</h1>');

