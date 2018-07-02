var passcode = ~~(Math.random()*999)
var tries=10;
 var button =document.getElementById("guess-button")
var number = document.getElementById("guess-number")
button.addEventListener("click",guessNumber);
    
    var attemptsText = document.getElementById("attempts")
    attemptsText.innerHTML = "Number of attempts left" + tries;
var clueText = document.getElementById("clue");
    
function guessNumber(){
   
    tries = tries - 1;   
    console.log("You Have "+tries+" tries left")
    console.log("There Is A number Beetween ) 1 And 999")
    var guess = number.value
    if(guess==passcode)
    {
        document.body.innerHTML = "<h1>You Win</h1>" + "<p>You Got It In: " + (10-tries) + "tries</p>"
        console.log("You Win!!!")
    }
    else if(tries<=0){
        document.body.innerHTML = "<h1>You Lose</h1>" + "<p>The number was: " + passcode + "</p>"
        console.log("You Lose!!! The number was: " + passcode)
    }
    else{
          attemptsText.innerHTML = "Number of attempts left" + tries;
        giveClue(guess)
    }
}
function giveClue(guess){
    if (guess > passcode){
        clueText.innerHTML +="<li>" + guess + " is too high! </li>";
        
    }
    else{
       clueText.innerHTML +="<li>" + guess + " is too Low! </li>";
        
    }
}