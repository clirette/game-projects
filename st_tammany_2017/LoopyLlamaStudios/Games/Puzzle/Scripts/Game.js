var passcode = ~~(Math.random() * 1000)
var tries = 10;

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
button.addEventListener("click",guessNumber);

var clueText = document.getElementById("clue")

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left:" + tries;
 
function guessNumber()
{
    console.log("You have " + tries + " tries left.");
    console.log("There is a number between 0-999");
    var guess = number.value
    tries = tries - 1;
    if (guess == passcode)
    {
        console.log("You won! Got it in " + (10 - tries) + "  tries");
        document.body.innerHTML = "<h1>You Won!</h1>" + "<p>Got it in " +(10-tries)+" tries.</p>"
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>You Lost!</h1>" + "<p>The Number was: "+passcode+" </p>"
        
    }
    else
    {
        attemptsText.innerHTML = "<p>Number of attempts left: " + tries + "</p>";
        giveClue(guess);
    }
}

function giveClue(guess)
{
    if (guess > passcode)
    {
        clueText.innerHTML+= "<li>" + guess + " is too high!</li>";
    }
    else
    {
        clueText.innerHTML+= "<li>" + guess + " is too low!</li>";
    }
}
