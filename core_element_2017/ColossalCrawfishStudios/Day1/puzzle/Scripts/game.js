var passcode = ~~(Math.random()*10);
var tries = 10;

var clueText = document.getElementById("clues");

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;
button.addEventListener("click", guessNumber);

function guessNumber()
{
    attemptsText.innerHTML = "Number of attempts left:" + tries;
    console.log("Guess a number between 0-999");
    var guess = number.value;
    tries = tries - 1;
    if (guess == passcode)
    {
        document.body.innerHTML ="<h1>You win! </h1>";
    }
    else if (tries <= 0)
    {
     document.body.innerHTML ="<h1>You Lose!</h1>"+ "<p>The number was :" + passcode +"</p>";
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
        
        clueText.innerHTML += "<li>" + guess + " is too high!" +"</li>"
    }
    else
    {
       clueText.innerHTML += "<li>" + guess + " is too low!" + "</li>"
    }
}
    
