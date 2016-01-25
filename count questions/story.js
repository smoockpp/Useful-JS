var questions = 3;

var questionsLeft = ' [' + questions + ' questionsLeft]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -=1;
questionsLeft = ' [' + questions + ' questionsLeft]';
var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questionsLeft]';
var noun = prompt('Please type a noun' + questionsLeft);

alert('All done. Ready for the message?');
var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);
