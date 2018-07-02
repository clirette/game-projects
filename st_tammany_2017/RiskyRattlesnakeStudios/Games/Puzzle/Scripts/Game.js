var passcode = ~~(Math.random() * 1000);
var tries = 10;

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
button.addEventListener("click",guessNumber);
var attemptsText = document.getElementById("attempts");
attemptsText.InnerHTML = "Number of attempts left: " + tries;
var clueText = document.getElementById("clue");

function guessNumber()
{
    
    console.log('yu haev ' + tries + " mure tris")
    console.log( "Ther id a nmber betwe0n o-qqq")
    var guess = number.value
    tries = tries - 1;
    if (guess == passcode)
    {
        document.body.innerHTML ="<h1>yee u win gaem 2 claem ur priez pres alt + f4" + "<h1>"
        
    }
    else if(tries <= 0)
    {
        document.body.innerHTML = "<h1>u r uglee failer<h1>"+"<p> tha nmbr wus " + passcode + " dum dum </p>";
       
    }
    else
    {
        attemptsText.innerHTML = "Number of attempts left: " + tries;
        giveClue(guess)
        
    }
        
}
function giveClue(guess)
    {
        if (guess > passcode)
        {
            clueText.innerHTML +="<li>" +guess+ " iz tu hi!</li>";
            
        } else {
            clueText.innerHTML +="<li>" +guess+ " iz tu loo!</li>";
             
        }
    }