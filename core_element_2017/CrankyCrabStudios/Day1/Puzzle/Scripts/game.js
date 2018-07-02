var passcode = ~~(Math.random() * 999);
var tries = 10;

var clueText = document.getElementById("clues");

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");

var triesText = document.getElementById("tries")

button.addEventListener("click", guessNumber);
triesText.innerHTML = "Number of tries left:" + tries;

function guessNumber()
{
    console.log("you have " + tries + " guesses left")
    
    var guess = number.value;
    tries = tries - 1;
    triesText.innerHTML = "Number of tries left:" + tries;
    if (guess == passcode)
    {
        document.body.innerHTML = "<h1>You Win!</h1>";
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>You Lose!</h1>" +"<p>Thw correct answer was "+ passcode +"</p>"
        
        console.log (passcode)
    }
    else
    {
        console.log ("Wrong. Try again");
        giveClue(guess)
    }
}

function giveClue(guess)
{
    if (guess < passcode)
    {
        clueText.innerHTML += "<li>" + guess +" is too low!" +"</li>"
    }
    if (guess > passcode) 
    {
        clueText.innerHTML += "<li>" + guess + " is too high" + "</li>";
    }
}