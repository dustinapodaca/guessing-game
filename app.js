'use strict'; // strict syntax

let correctAnswer = 0;

console.log('app is running');

// introduction question
let user = prompt('Hey there, my name is Dustin- what is you name?');
console.log(user);
if (user === null) {
  alert('You need to provide your name');
  user = prompt('No really, please let me know who you are?');
} else {
  alert('Why hello ' + user + '! It is a pleasure to meet you. Welcome to my guessing game site!');
}

// question one
let travel = prompt('I have a few questions for you. Feel free to answer \'Yes\' or \'No\'- but for starters, do I enjoy traveling and being outdoors?');
if (typeof (travel) === 'string') {
  travel = travel.toLowerCase();
}

if (travel === 'yes') {
  alert('You are correct! I love to travel and explore other parts of the world.');
  correctAnswer++;
//  console.log('Correct!');
} else if (travel === 'no') {
//  alert('That is incorrect');
} 

// question two
let gym = prompt('Do I enjoy spending time taking care of myself at the gym?');
if (typeof (gym) === 'string') {
  gym = gym.toLowerCase();
}

if (gym === 'yes') {
  alert('You are spot on! The gym is usually always my \'me time\' where I can get away.');
  correctAnswer++;
//  console.log('Correct!');
} else if (gym === 'no') {
//  alert('That is incorrect');
} 

// question three
let drink = prompt('Do I probably drink way too much caffeine?');
if (typeof (drink) === 'string') {
  drink = drink.toLowerCase();
}

switch (drink) {
case 'yes':
  alert('You\'re absolutely right and I should probably chill out.');
  correctAnswer++;
//  console.log('Correct!');
  break;
case 'no':
  alert('You\'re absolutely right, who determines what is to much anyways?');
//  console.log('incorrect!');
  break;
}

// question four
let code = prompt('Am I currently attending CodeFellows?');
if (typeof (code) === 'string') {
  code = code.toLowerCase();
}

switch (code) {
case 'yes':
  alert('Correct again, I am currently in Code 201 and am learning software development.');
  correctAnswer++;
//  console.log('Correct!');
    break;
case 'no':
  alert('That is actually incorrect, I am currently enrolled as a student and am loving it so far!');
//  console.log('incorrect!');
  break;
}

// question five
let security = prompt('Was I in the security field before starting CodeFellows?');
if (typeof (security) === 'string') {
  security = security.toLowerCase();
}

if (security === 'yes') {
  alert('Once more, you are correct! I was and still am in the private security industry.');
  correctAnswer++;
//  console.log('Correct!');
} else if (security === 'no') {
//  alert('That is incorrect');
} 

// question six
for (let i = 0; i < 4; i++) {
  let myAge = prompt('What age do you think I currently am?');
//console.log(typeof(myAge));
  let age = 30;
  if (myAge == age) {
    alert('Wow! That was a really good guess! You got it!');
    correctAnswer++;
    break;
  } else if (i < 3 && myAge < age) {
    alert('That is close, but you need to go a bit higher.');
  } else if (i < 3 && myAge > age) {
    alert('Dang, I\'m not quite there yet, try a little lower.');
  } else if (i === 3) {
    alert('Sorry your out of guesses but for the record, I am 30 years old.');
  }
}

// question seven
let correct = false;
let topArtists = [
  'deadmau5',
  'memphis may fire',
  'dayseeker',
  'olafur arnalds',
  'wage war',
  'erra',
  'dance gavin dance',
  'kaskade',
  'ben böhmer',
  'lane 8'
];

for (let i = 0; i < 6; i++) {
  let response = prompt('I\'ll give you 7 guesses to try and name one of my Top Artists in the EDM or Metalcore genre.');
  for (let j = 0; j < topArtists.length; j++) {
    if (response.toLowerCase() == topArtists[j]) {
      alert(response + ' is correct! That was not an easy one to guess!');
      correct = true;
      correctAnswer++;
      break;
    }
  }  
  if (correct == false) alert('Sorry, guess again.');
  else break;
  
}
alert('My Top 10 Artists in no specific order are ' + topArtists + '.') 
alert('Thank you for answering those questions ' + user + ', you did great! You got ' + correctAnswer + ' questions right! Welcome to my site!')

