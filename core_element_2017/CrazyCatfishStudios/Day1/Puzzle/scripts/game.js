var passcode = ~~(Math.random() * 1000)
var tries = 10

var cluetext = document.getElementById("clues");

var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");

var attemptsText = document.getElementById("attempts")
attemptsText.innerHTML = "Number of attempts left: " + tries;

button.addEventListener("click", guessNumber);

function guessNumber()
{
	tries = tries - 1;
	attemptsText.innerHTML = "Number of attempts left: " + tries;
	console.log("Guess a number between 0-999");
	var guess = number.value;
	if (guess == passcode)
	{
		document.body.innerHTML = "<h1>You Win!</h1>";
	}
	else if (tries <= 0)
	{
		document.body.innerHTML = "<h1>You Lose!</h1>" + "<p> The number was: "+passcode+"</p>";
		
	}else{
		giveClue(guess);
	}
}


function giveClue(guess) 
{
	if (guess > passcode)
	{
		alert("too high");
		cluetext.innerHTML += "<li>" + guess + "is tooo high!" +"</li>"
	}
	else
	{
		cluetext.innerHTML += "<li>" + guess + "is too low!" + "</li>"
	}
}