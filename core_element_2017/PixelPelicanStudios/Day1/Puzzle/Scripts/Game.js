var passcode = Math.floor( Math.random() * 1000 );
var tries = 10;


var clueText = document.getElementById("clue");

var attemptsText = document.getElementById("attempts");

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
button.addEventListener("click", guessnumber);

function guessnumber()
{
    var guess = number.value;
    tries--;
    if ( guess == passcode )  
    {
        document.body.innerHTML = "<h1>You Win!</h1>" + "<p>Got it in " + (10-tries) + "tries.</p>" ;
    }
    else if (tries <= 0)
    {
        document.body.innerHTML = "<h1>Die in a hole!</h1>" + "<p>The number was:" + passcode + "</p>";
    } 
     else
    {
      attemptsText.innerHTML = "Number of attempts left: " + tries;
      giveClue(guess);
    }
}


function giveClue(guess)
{
    if (guess > passcode)
    {
       clueText.innerHTML += "<li>" + guess + "is too High!" + "</li>";
    }
    else
    {
        clueText.innerHTML += "<li>" + guess + "is too Low!" + "</li>";
    }
}