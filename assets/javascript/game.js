var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 10;

var guessesSoFar = [];

var userGuess = [];

var computerGuess = [];



var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

guessesSoFar.push(userGuess);

window.onload = function() {
    var randomGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    
    console.log(computerGuess[0]);

  

