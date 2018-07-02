var passcode = ~~(Math.random() * 1000);
var tries = 15;
var clueText = document.getElementById("clues")
var button = document.getElementById("guess-button");
var number = document.getElementById("guess-number");
var attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;
button.addEventListener("click", guessNumber);
function guessNumber()
{
    attemptsText.innerHTML = "Number of attempts left: " + tries;
    var guess = number.value;
    tries = tries - 1;
    if (guess == passcode)
    {
        document.body.innerHTML = "<h1>You win!</h1>";
    }
    if (tries == 0)
    {
        document.body.innerHTML = "<h1>You lose!</h1>" + "<p>The number was " + passcode + "</p>";
    }else {
        giveClue(guess);
    }
    if (guess == 123)
    {
        alert ("Good job! You can count!");
    }
    if (guess == 666)
    {
        alert ("Welcome to the future. Donald Trump and Vladimir Putin have taken over the world, and there are walls everywhere")
    }
    if (guess == 321)
    {
        alert ("BLAST OFF!")
    }
    if (guess > 999)
    {
        alert ("Hey! Play by the rules!")
    }
    if (guess < 0)
    {
        alert ("Hey! Play by the rules!")
    }
    if (guess == 314)
    {
        alert ("I prefer edible pie")
    }
    if (guess == 246)
    {
        alert ("Good job! You can count by twos!")
    }
    if (guess == 369)
    {
        alert ("Good job! You can count by threes!")
    }
    if (guess == 69)
    {
        alert ("Hey! Don't be so immature!")
    }
    if (guess == 13)
    {
        alert ("Computers don't believe in luck")
    }
    
}


function giveClue(guess)
    {
    if (guess < passcode)
    {
        clueText.innerHTML += "<li>" + guess + " is lower than the number!" + "</li>"
    }
    if (guess > passcode)
    {
        clueText.innerHTML += "<li>" + guess + " is higher than the number!" + "</li>"
    }
}