var passcode=~~(Math.random()* 1000);
var tries=10;

var button=document.getElementById("Guess-Button");
var number=document.getElementById("Guess-number");
button.addEventListener("click",guessNumber);

var attemptsText=document.getElementById("attempts")
var clueText=document.getElementById("clue")
function guessNumber()
{
    console.log("you have"+ tries+"tries left")
    console.log("There a number between o-999")
    var guess=number.value
    tries = tries - 1
    if(guess==passcode)
    {
        document.body.innerHTML= "<h1>You Won!</h1>"+"<p>Got it in"+(10-tries)+"tries.</p>"
       
    }
    else if(tries<= 0)
    {
        document.body.innerHTML= "<h1>You Lost!</h1>"+"<p>The number was:"+passcode+"</p>"
       
    }
    else
    {
       attemptsText.innerHTML="Number of attempts left "+tries;
       
       
        giveClue(guess);
    }
}    

function giveClue(guess)
{
    if(guess > passcode)

    {
        clueText.innerHTML+="<li>"+guess+"is too high!</li>";
        
    }
    else
    {
        clueText.innerHTML+="<li>"+guess+"is too low!</li>";
          
    }
}