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
};
document.onkeyup = function(event) {
    var userGuess = event.key
    guessesSoFar.push(userGuess)
     document.querySelector("#lettersGuessed").innerHTML="Letters Guessed:"+userGuess[0];
   
    console.log(userGuess);

if (userGuess === computerGuess){
    wins ++;
    alert("You're a Psychic!");
    guessesLeft = 10;
    guessesSoFar.length = 0;
    document.querySelector("#wins").innerHTML="wins :"+wins;
}

else if (guessesLeft == 0){
    losses++;
    alert("Better luck next time!");
    guessesLeft = 10;
    guessesSoFar.length = 0;
     document.querySelector("#losses").innerHTML="losses:"+losses;
}
else if (userGuess !== computerGuess){
    guessesLeft--;
     document.querySelector("#guessesLeft").innerHTML="Guesses left:"+guessesLeft;
}



};

  

