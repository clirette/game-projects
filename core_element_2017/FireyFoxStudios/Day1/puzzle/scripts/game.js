var passcode= ~~(Math.random()*1000);
var tries = 10;

var clueText = document.getElementById("blues-clues");

    var button = document.getElementById("guess-button");
    var number = document.getElementById("guess-number");

var attemptsText =document.getElementById("tries");


button.addEventListener("click", guessNumber);

function guessNumber()
{
        tries = tries - 1;
    attemptsText.innerHTML = ("Number of Attempts left: " + tries);
    var guess = number.value;
    //var guess = prompt("Enter a number (0 - 999")")"


    if (guess == passcode)
    {
        document.body.innerHTML = "<h1>You Win!</h1>";

    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>You lose! LOL</h1>,<h6>rylen didnt help me with anything at all</h6>";
    
    }
    else {
        giveClue(guess);
    }
}

function giveClue(guess)
{

    
    if(guess > passcode)
    {
        clueText.innerHTML += "<li>" + guess + " is too high!" + "</li>";
    }
    else
    {
         clueText.innerHTML += "<li>" + guess + " is too low!" + "</li>";
    }
    
}