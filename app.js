'use strict'; //strict syntax

console.log('app is running');


let user = prompt('What is your name?');
console.log(user);
if (user === 'Jacob') {
    alert('Hello Jacob');
}

let color = prompt('What is your favorite color?');
console.log(color)

switch (color) {
    case 'red':
        alert('I like red');
        break;
    case 'blue':
        alert('Blue is great too');
        break;
    case 'yellow':
        alert('Yellow is okay');
        break;
    default:
        alert('Oh interesting, I don\'t know that color')
}
// creates a variable and asks the user to give it a value.
let movie = prompt('What is one of your favorite action movies?'); // or can add .toLowerCase(); after the string
if (typeof(movie) === 'string') {
    movie = movie.toLowerCase(); //reassigns movie variable to a lowercase string (if it as already a string)
}


if (movie === 'con air') {
    alert('That is a great movie');
}   else if (movie === 'the rock'); {
    alert('Another great movie');
}   else if (movie === 'face off') {
    alert ('One of my faves!');
}   else {
    alert('I don\'t know that movie')
}
    
