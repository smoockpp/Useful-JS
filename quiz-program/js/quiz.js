var questionsList = [
  ["How many moons have the Earth?", "1"],
  ["How many moons have Mars", "2"],
  ["How many fingers a human being have on both hands?", "10"]
];
var correct = 0;
var incorrect = 0;
var html;
var correctAnswers = [];
var wrongAnswers = [];


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
  
  for (var i = 0; i < questionsList.length; i += 1) {
    var guess = prompt(questionsList[i][0]); 
    if (guess.toLowerCase() === questionsList[i][1]) {
      correct += 1;
      correctAnswers.push(questionsList[i][0]);
    } else {
      incorrect += 1;
      wrongAnswers.push(questionsList[i][0]);
    }
  }


function printArray(arrayName) {
  var listHTML = '<ol>';
  for (var i=0; i < arrayName.length; i+=1) {
    listHTML += '<li>' + arrayName[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}


html = "You got " + correct + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += printArray(correctAnswers);
html += '<h2>You got these questions wrong:</h2>';
html += printArray(wrongAnswers);
print(html);


 




