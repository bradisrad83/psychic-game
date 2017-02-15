//Global variables
var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'
];
var wins = 0;
var losses = 0;
var guesses = 10;
var usedLetters = [];
var bool = true;
//sets the random computer guess
var computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
//shows how many guesses are left
document.getElementById("guesses").innerHTML = "Guesses Left:" + " " + guesses;

//Function to reset the variables
var reset = function() {
        guesses = 10;
        usedLetters = [];
        computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
        console.log(computerChoice);
        document.getElementById("used").innerHTML = "Letters You've Guessed:" + " " + usedLetters;
        document.getElementById("guesses").innerHTML = "Guesses Left:" + " " + guesses;
    }
    //function to check if the userguess has not been used before
var validator = function(userGuess) {
    //if userguess is a usedletter not valid
    if (usedLetters.indexOf(userGuess) === -1) {
        return true;
    } else {
        return false;
    }
};


document.onkeyup = function(event) {
    userGuess = event.key;
    if (userGuess === computerChoice) {
        alert("Holy cow maybe you really are psychic!?!?!?!?!?!?!")
        wins++;
        document.getElementById("wins").innerHTML = "Wins:" + " " + wins;
        reset();
    } else {
        //console.log(guesses);
        //if validator returns false alert that letter has been used already
        //if validator returns true continue the logic
        if (!validator(userGuess)) {
            alert("You have already chosen this letter, please choose again");
        } else {
            guesses--;
            usedLetters.push(userGuess);
            document.getElementById("used").innerHTML = "Letters You've Guessed:" + " " + usedLetters;
            document.getElementById("guesses").innerHTML = "Guesses Left:" + " " + guesses;
            if (guesses < 1) {
                alert("I'm sorry you are not a psyhcic after all");
                losses++;
                document.getElementById("losses").innerHTML = "Losses:" + " " + losses;
                reset();

            }
        }
    }
}
