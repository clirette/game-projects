var passcode = ~~(Math.random() * 1000);
var tries = 10;
var clueText = document.getElementById("clues");
var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left:" + tries;

button.addEventListener("click", guessNumber);

function guessNumber()
{
    tries = tries - 1;
    attemptsText.innerHTML = "Number of attempts left:" + tries;
    var guess = number.value;
    
    if (guess == passcode)
    {
         document.body.innerHTML = "<h1>You win!</h1>" + "<p>The number was: " + passcode + "</p>"
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>You lose!</h1>" + "<p>The number was: " + passcode + "</p>"
    }
    else
    {
        giveClue(guess);
    }
}

function giveClue(guess)
{
     if (guess < passcode)
        {
           clueText.innerHTML += "<li>" + "Higher than " + guess + "." + "</li>"
        }
        else if (guess > passcode)
        {
           clueText.innerHTML += "<li>" + "Lower than " + guess + "." + "</li>" 
        }
}