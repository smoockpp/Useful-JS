//function getRandomNumber() {
//  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
//  return randomNumber;
//}
//
//alert( getRandomNumber() );
//console.log( getRandomNumber() );
//var dieRoll = getRandomNumber();


function isEmailEmpty() {
  var field = document.getElementById('email');
  if ( field.value === '') {
    return true; 
  } else {
    return false;
  }
}