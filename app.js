'use strict'; // strict syntax

let correctAnswer = 0;

console.log('app is running');

let user = prompt('Hey there, my name is Dustin- what is your name?');
console.log(user);
function one() {
  if (user === null) {
    alert('You need to provide your name');
    user = prompt('No really, please let me know who you are?');
  } else {
    alert('Why hello ' + user + '! It is a pleasure to meet you. Welcome to my guessing game site!');
  }
}
one();

let multipleQuestions = [
  'I have a few questions for you. Please answer with \'Yes\' or \'No\'. For starters, do I enjoy traveling and being outdoors?',
  'Do I enjoy spending time taking care of myself at the gym?',
  'Do I probably drink way too much caffeine?',
  'Am I currently attending CodeFellows?',
  'Was I in the security field before starting CodeFellows?'
];

let answers = [
  'yes',
  'yes',
  'yes',
  'yes',
  'yes',
];

function allQuestions() {
  for (let i = 0; i < multipleQuestions.length; i++) {
    let response = prompt(multipleQuestions[i]);

    if (typeof (response) === 'string') {
      response = response.toLowerCase();
    }
    if (response === answers[i]) {
      alert('You are correct!');
      correctAnswer++;
      console.log('Correct!');
    }
    if (response !== answers[i]) {
      alert('That is incorrect!');
      console.log('incorrect');
    }
  }
}
allQuestions();

function seven() {
  for (let i = 0; i < 4; i++) {
    let myAge = parseInt(prompt('What age do you think I currently am?'));
    let age = 30;
    if (myAge === age) {
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
}
seven();

let correct = false;
let topArtists = [
  'deadmau5',
  'Memphis May Fire',
  'Dayseeker',
  'Olafur Arnalds',
  'Wage War',
  'ERRA',
  'Dance Gavin Dance',
  'Kaskade',
  'Ben B??hmer',
  'Lane 8'
];

function eight() {
  for (let i = 0; i < 6; i++) {
    let response = prompt('I\'ll give you 7 guesses to try and name one of my Top Artists in the EDM or Metalcore genre.');
    for (let j = 0; j < topArtists.length; j++) {
      if (response.toLowerCase() === topArtists[j].toLowerCase()) {
        alert(response + ' is correct! That was not an easy one to guess!');
        correct = true;
        correctAnswer++;
        break;
      }
    }
    if (correct === false) alert('Sorry, guess again.');
    else break;
  }
  alert('My Top 10 Artists in no specific order are ' + topArtists + '.');
  alert('Thank you for answering those questions ' + user + ', you did great! You got ' + correctAnswer + ' questions right! Welcome to my site!');

}
eight();
