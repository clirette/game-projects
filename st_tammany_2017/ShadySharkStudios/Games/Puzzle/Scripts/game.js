var passcode = ~~(Math.random() * 1000);
var tries = 10;

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
button.addEventListener("click", guessNumber);

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;

var clueText = document.getElementById("clue");

function guessNumber()
{
    console.log("You have " + tries + " tries left.");
    tries = tries -1;
    console.log("There is a number between 0-999");
    var guess = number.value;
    if (guess == passcode)
    {
        document.body.innerHTML = "<h1>You Won! *cue applause*</h1>" + "<p>Got it in " +(10-tries)+" tries!</p>";
        alert("You won! Got it in " + (10-tries) + " tries!");    
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>You Lost! *cue sad trombone*</h1>" + "<p>The number was: "+ passcode +"</p>";
    }
    else
    {
        attemptsText.innerHTML = "Number of attempts left:" + tries;
        giveClue(guess);
    }
}

function giveClue(guess)
{
    if (guess > passcode)
    {
        clueText.innerHTML += "<li>" + guess + "is too high!</li>";
    }
    else
    {
        clueText.innerHTML += "<li>" + guess + "is too low!</li>";
    }

}
