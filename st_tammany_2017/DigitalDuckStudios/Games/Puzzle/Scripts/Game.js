var passcode =~~(Math.random() * 1000);
var tries = 10;

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
var clueText= document.getElementById("clue");
button.addEventListener("click", guessNumber);
var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left:" + tries;
function guessNumber()
{
        console.log("You Have " + tries + " tries left.");
        console.log ("there is A Number Between 0-999");
        var guess = number.value;
        tries = tries - 1;
        if (guess == passcode)
        {
                document.body.innerHTML = "<h1>You Win!<h1>" + "<p>Got it in" + (10-tries) + "tries.</p>";
        }
        else if (tries <= 0)
        {
                document.body.innerHTML = "<h1>You Lose!<h1>" + "<p>the number was:" + (passcode) + ".</p>";
        }       
        else        
        {
         attemptsText.innerHTML = "Number of attempts left:" + tries;
         giveclue(guess);
        }
}

function giveclue(guess)
{
         if (guess > passcode)      
        {
         clueText.innerHTML +="<li>"+ guess + "is too high!</li>" 
        }
        else
        {
                clueText.innerHTML +="<li>"+ guess + "is too low!</li>"  
        }
        
}