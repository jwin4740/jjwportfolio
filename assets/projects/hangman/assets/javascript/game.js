$(document).ready(function () {


var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];
var safety = ["S", "A", "F", "E", "T", "Y"];
var cowboys = ["C", "O", "W", "B", "O", "Y", "S"];
var touchdown = ["T", "O", "U", "C", "H", "D", "O", "W", "N"];
var giants = ["G", "I", "A", "N", "T", "S"];


var word = [bears, giants, touchdown, cowboys, packers, safety, fumble];
var randomWord;
var counter;
var guessed;
var guessCounter;
var guessLeftCounter = 7;
var wrongGuessCounter = 0;
var boolOver = false;
var winCounter = 0;
var lossCounter = 0;
var allLettersGuessed = "";

var validLetters = [];
for (var c = 65; c < 91; c++)
{
    validLetters.push(String.fromCharCode(c));
    
}
console.log(validLetters);


// START set up functions to be used

function setUp() {
    randomWord = word[Math.floor(Math.random() * word.length)];
    var blankDiv = document.getElementById("board");
    for (var i = 0, n = randomWord.length; i < n; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "j";
        blankDiv.appendChild(newDiv);
        newDiv.setAttribute("class", "insert");
        counter = randomWord.length;
    }
    console.log(randomWord);
    console.log(counter);
};

function setWins() {
    var spanDiv = document.getElementById("winner");
    var newDiv = document.createElement("p");
    newDiv.innerHTML = winCounter;
    spanDiv.appendChild(newDiv);

};

function setGuessLeft(){
    var blankP = document.getElementById("remainingNumber");
    blankP.textContent = guessLeftCounter;
};


function setlosses() {
    var spanDiv = document.getElementById("loser");
    var newDiv = document.createElement("p");
    newDiv.innerHTML = lossCounter;
    spanDiv.appendChild(newDiv);

};

function winCount() {
    var changer = document.getElementById("winner");
    changer.textContent = winCounter;
}

function lossCount() {
    var changer = document.getElementById("loser");
    changer.textContent = lossCounter;
};

function wrongGuess() {
    var blankP = document.getElementById("guesses");
    var newP = document.createElement("p");
    newP.innerHTML = guessed;
    blankP.appendChild(newP);
    newP.setAttribute("class", "guesser");
};

function reveal(i) {
    var changer = document.getElementsByClassName("insert");
    changer[i].textContent = randomWord[i];
    changer[i].style.color = "black";
    changer[i].style.borderColor = "transparent";

};

function alertWin (){
    var blankP = document.getElementById("gamestatus");
    var newP = document.createElement("h1");
    newP.innerHTML = "You Win!!!";
    blankP.appendChild(newP);
    newP.setAttribute("class", "alertwin");
};

function alertLoss (){
    var blankP = document.getElementById("gamestatus");
    var newP = document.createElement("h1");
    newP.innerHTML = "You Lose!!!";
    blankP.appendChild(newP);
    newP.setAttribute("class", "alertloss");

};

function alertGuessedAlready (){
    var blankP = document.getElementById("alert");
    var newP = document.createElement("p");
    newP.innerHTML = "You already guessed that letter; try again";
    blankP.appendChild(newP);
    newP.setAttribute("class", "alertfont");
};

function alertInvalidGuess (){
    var blankP = document.getElementById("alert");
    var newP = document.createElement("p");
    newP.innerHTML = "Invalid guess (not a letter); try again";
    blankP.appendChild(newP);
    newP.setAttribute("class", "alertfont");
};

function remainingNumber (){
    var blankP = document.getElementById("remainingNumber");
    blankP.textContent = guessLeftCounter;
};

$(".replay").on("click", function reset() {
    var clearBoard = document.getElementById("board");
    var clearGuess = document.getElementById("guesses");
    var clearAlert = document.getElementById("alert");
    var clearGameStatus = document.getElementById("gamestatus");
    
    while (clearBoard.hasChildNodes()) {
        clearBoard.removeChild(clearBoard.firstChild);
    }
    while (clearGuess.hasChildNodes()) {
        clearGuess.removeChild(clearGuess.firstChild);
    }
    while (clearAlert.hasChildNodes()) {
        clearAlert.removeChild(clearAlert.firstChild);
    }
    while (clearGameStatus.hasChildNodes()) {
        clearGameStatus.removeChild(clearGameStatus.firstChild);
    }
    
    allLettersGuessed = "";
    setUp();
    guessLeftCounter = 7;
    setGuessLeft();
    boolOver = false;
    
});

function clearDuring (){
var clearAlert = document.getElementById("alert");
while (clearAlert.hasChildNodes()) {
        clearAlert.removeChild(clearAlert.firstChild);
    }
}



setUp();
setWins();
setlosses();
setGuessLeft();

document.onkeyup = function(event) {
    userGuess = event.key;
    clearDuring();
    console.log(boolOver);
    var userGuessCap = userGuess.toUpperCase();
    guessCounter = 0;
        
    for (var i = 0, n = randomWord.length; i < n; i++) {
        
        if (validLetters.indexOf(userGuessCap) > -1 && boolOver == false)
        {  
            if (allLettersGuessed.indexOf(userGuessCap) > -1)
            {
                alertGuessedAlready();
                return;
            }

            else   
            {
                if (userGuessCap == randomWord[i]) 
                {
                    reveal(i);
                    counter--;
                    console.log(counter);
                     
                }         

                if (userGuessCap != randomWord[i]) 
                {
                    guessCounter++;
                    guessed = userGuessCap;
                    
                }
            }
        }
        else if (boolOver == false)
        {
            alertInvalidGuess();
            return;
        }   
    }

    allLettersGuessed += userGuessCap;
    if (guessCounter == randomWord.length) {
        wrongGuess();
        guessLeftCounter--;
        wrongGuessCounter++;
        console.log("Wrong is:: " + wrongGuessCounter);
        remainingNumber();

        
    }
// user loses the game
    if (wrongGuessCounter == 7) {
        lossCounter++;
        lossCount();
        alertLoss();
        boolOver = true;
        console.log(boolOver);
        wrongGuessCounter = 0;
        guessCounter = 0;

    }
// user wins the game
    if (counter == 0) {
        winCounter++;
        winCount();
        alertWin();
        boolOver = true;
        console.log(boolOver);
        counter = randomWord.length;

    }
console.log("You have guessed" + allLettersGuessed);

};


// scroll animation //

$(function() {
    $('.marqueetop').marquee({
        //speed in milliseconds of the marquee
        duration: 7500,
        //gap in pixels between the tickers
        gap: 700,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
});

$(function() {
    $('.marqueebottom').marquee({
        //speed in milliseconds of the marquee
        duration: 7500,
        //gap in pixels between the tickers
        gap: 100,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
    });
});

});


