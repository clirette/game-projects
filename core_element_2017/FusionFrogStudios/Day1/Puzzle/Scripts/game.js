var passcode = ~~(Math.random() * 1000);
var tries = 10;

var clueText = document.getElementById("clues");

var button = document.getElementById("guess button");
var number = document.getElementById("guess number");

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;

button.addEventListener("click" , guessNumber);

function guessNumber() 
{
    tries = tries - 1;
    attemptsText.innerHTML = "Number of attempts left: " + tries;
    
    var guess = number.value;
    
    if (guess == passcode)
    {
        document.body.innerHTML = "<h1>congrats u won a free nothing</h1>" + "You got it in " + 10 - tries + "attempts.";
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>You lose get rekt</h1>" + "The number was " + passcode + "</p>";
    }
    else
    {
        giveClue(guess);
    }
}


function giveClue(guess)
{
    if (guess > passcode)
    {
        clueText.innerHTML += "<li>" + guess + " iz 2 hai, n00b." + "</li>";
    }
    else
    {
        clueText.innerHTML += "<li>" + guess + " iz 2 lew u frikin fart." + "</li>";
    }
}