
var passcode = ~~(Math.random() *1000)
var tries = 10;

var button = document.getElementById("guess-button")
 var number = document.getElementById("guess-number")
 var cluetext = document.getElementById("clues")
 var attempts = document.getElementById("attempts")
  

button.addEventListener("click", guessnumber);

function guessnumber()
{
    var guess = number.value;
     tries -= 1;
    if(tries != 1){
    attempts.innerHTML = ("You have " + tries + " tries left.")
    }else if (tries == 1) {
    attempts.innerHTML = ("You have " + tries + " try left.");
    }
    
   
    
   
    
    if(guess == passcode) {
         document.body.innerHTML = "<h1>You Won. The number was " + passcode + "</h1>"
        
        
    } else if (tries == 0) {
        var faroff;
        if (guess > passcode) {
            faroff = guess - passcode;
        } else {
            faroff = passcode - guess; 
        }
        document.body.innerHTML = "<h1>You Lost.</h1> <p>The number was " + passcode + ". You were " + faroff + " far off </p>"
        
        
        
    } else giveClue(guess)
    
}


function giveClue(guess) {
    if (guess > passcode) {
        cluetext.innerHTML += "<li> " + " " + guess + " is too high!" + "</li>"
    } else {
       cluetext.innerHTML += "<li> " + " " + guess + " is too low!" + "</li>"
    }
}




