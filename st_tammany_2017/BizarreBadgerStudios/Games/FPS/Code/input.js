input = new Object();

input.x = null;
input.y = null;

input.start = function()
{
    renderer.canvas.addEventListener("mousemove", input.mouseMove)
    renderer.canvas.addEventListener("click", player.attack)
}

input.mouseMove = function(event)
{
    input.x = event.clientX;
    input.y = event.clientY;
}


