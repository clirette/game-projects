renderer = new Object();

// Create the canvas
renderer.canvas = document.getElementById("viewport");
renderer.ctx = renderer.canvas.getContext("2d");

renderer.draw = function()
{
	renderer.ctx.clearRect(0,0,viewport.width,viewport.height);
	//Draw game
	scene.draw(); 
	player.draw();
	
};

renderer.drawGameOver = function()
{
	//fade viewport
	renderer.ctx.fillStyle = "rgba(255,255,255,.01)";
	renderer.ctx.fillRect(0,0,viewport.width, viewport.height);
	//print Game Over
	renderer.ctx.fillStyle = "rgb(255, 0, 0)"; //set to white
	renderer.ctx.font = "42px Helvetica";  //set the font
	renderer.ctx.textAlign = "center"; //set to left
	renderer.ctx.textBaseline = "center"; //set to top
	renderer.ctx.fillText("Game Over!", scene.width*16, scene.height*16); //set the contents

	renderer.canvas.style="cursor: auto;";
}