var students = [
  { 
    name : 'Niki',
    track : 'Front End Development',
    achievments : 53,
    points : 5666
  },
  {
    name : 'Zori',
    track : 'Web Design',
    achievments : 42,
    points : 4534
  },
  {
    name : 'Tisho',
    track : 'Noob',
    achievments : 0,
    points : -1
  },
  {
    name : 'Bogi',
    track : 'iOS',
    achievments : 45,
    points : 4890
  },
  {
    name : 'Someone',
    track : 'Front End Development',
    achievments : 32,
    points : 2660
  }
];

var html = '';
var student;
var search;

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '<p>';
  report += '<p>Achievments: ' + student.achievments + '<p>';
  report += '<p>Points: ' + student.points + '<p>';
  return report;
}

while (true) {
  search = prompt("Search student records: Type a name [Niki] (or type 'quit' to end)");
  if ( search === null || search.toLowerCase() === 'quit') {
    break;
  } 
    
  for (var i=0; i<students.length; i+=1) {
    student = students[i];
    if ( student.name === search ) {
      message = getStudentReport( student );
      print(message);
    }
  }
}








print(html);