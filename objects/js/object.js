var person = { 
  name : 'Sarah',
  country : 'US',
  age: 35,
  treeHouseStudent : true,
  skills : ['HTML', 'CSS', 'JavaScript']
};

//function print(message) {
//  var div = document.getElementById('output');
//  div.innerHTML = message;
//}
//
//var message = '<p>Hello. My name is ' + person.name + '</p>';
//message += '<p>I live in the ' + person.country + '</p>';
//person.name = 'Rainbow Dash';
//message += '<p>But, I wish my name was ' + person.name + '</p>';
//person.age += 1;
//message += '<p>My age is now ' + person.age + '</p>';
//message += '<p>I have ' + person.skills.length + ' skills: ';
//message += person.skills.join(', ') + '.</p>';
//
//print(message);


for ( var prop in person ) {
  console.log(prop, ': ', person[prop]); 
}