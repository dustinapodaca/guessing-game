'use strict'; // strict syntax

console.log('app is running');

let user = prompt('Hey there, my name is Dustin- what is you name?');
console.log(user);
if (user === null) {
    alert('You need to provide your name');
    user = prompt('No really, please let me know who you are?');
} else {
    alert('Why hello ' + user + '! It is a pleasure to meet you. Welcome to my site!');
}

let travel = prompt('I have a few questions for you. Feel free to answer \'Yes\' or \'No\'- but for starters, do I enjoy traveling and being outdoors?');
if (typeof (travel) === 'string') {
    travel = travel.toLowerCase();
}

if (travel === 'yes') {
    alert('You are correct! I love to travel and explore other parts of the world.');
//  console.log('Correct!');
} else if (travel === 'no') {
//  alert('That is incorrect');
} 

let gym = prompt('Do I enjoy spending time taking care of myself at the gym?');
if (typeof (gym) === 'string') {
    gym = gym.toLowerCase();
}

if (gym === 'yes') {
    alert('You are spot on! The gym is usually always my \'me time\' where I can get away.');
//  console.log('Correct!');
} else if (gym === 'no') {
//  alert('That is incorrect');
} 

let drink = prompt('Do I probably drink way too much caffeine?');
if (typeof (drink) === 'string') {
    drink = drink.toLowerCase();
}

switch (drink) {
case 'yes':
    alert('You\'re absolutely right and I should probably chill out.');
//  console.log('Correct!');
    break;
case 'no':
    alert('You\'re absolutely right, who determines what is to much anyways?');
//  console.log('incorrect!');
    break;
}

let code = prompt('Am I currently attending CodeFellows?');
if (typeof (code) === 'string') {
    code = code.toLowerCase();
}

switch (code) {
case 'yes':
    alert('Correct again, I am currently in Code 201 and am learning software development.');
//  console.log('Correct!');
    break;
case 'no':
    alert('That is actually incorrect, I am currently enrolled as a student and am loving it so far!');
//  console.log('incorrect!');
    break;
}

let security = prompt('Was I in the security field before starting CodeFellows?');
if (typeof (security) === 'string') {
    security = security.toLowerCase();
}

if (security === 'yes') {
    alert('Lastly, correct again. I was and still am in the private security industry.');
//  console.log('Correct!');
} else if (security === 'no') {
//  alert('That is incorrect');
} 

alert('Thank you for answering those questions ' + user + ', you did great! Welcome to my site!')

/*
// creates a variables and asks the user to give it a value.
let movie = prompt('What is one of my favorite action movies?'); // String data type
if (typeof (movie) === 'string') {
    movie = movie.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (movie === 'con air') {
    alert('That is a great Movie!');
} else if (movie === 'the rock') {
    alert('Another great Movie');
} else if (movie === 'face off') {
    alert('One of my faves!');
} else {
    alert('I don\'t know that movie!');
}
*/
