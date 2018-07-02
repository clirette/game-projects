var passcode = ~~(Math.random() * 1000);
var devcode = "Agis";
var tries = 15;

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
button.addEventListener("click", guessNumber);

var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;

var clueText = document.getElementById("clue");

    function guessNumber()
    {
        var guess = number.value; 
        tries = tries - 1;
        if (guess == passcode)
        {
            document.body.innerHTML = "<h1>You Won! The Kitty Cat loves you!</h1>" + "<p>You got it in " + (15 -tries) + " tries.</p>";
        } 
        else if (tries <= 0)
        {
            document.body.innerHTML = "<h1>The Kitty Cat Still Loves You, Even Though You Lost...</h1>" + "<p>The amount of love was " + passcode+" </p>";
        }
        else
        {
            attemptsText.innerHTML = "Number of attempts left: " + tries;
            giveClue(guess);
        }
        if (guess == devcode)
        {
          document.body.innerHTML = "<h1>Seriously? Cheating using the DevCode, so lame...</h1>" + "<p>How did you get the DevCode?</p>";

        }
    }
    
    function giveClue(guess)
    {
        if (guess > passcode)
        {
            clueText.innerHTML += "<li>" + guess + " is too high!</li>";
        }
        else
        {
            clueText.innerHTML += "<li>" + guess + " is too low!</li>";
        }
    }
    