renderer = new Object();

// Create the canvas
renderer.canvas = document.getElementById("viewport");
renderer.ctx = renderer.canvas.getContext("2d");

renderer.start = function()
{
	renderer.canvas.style = "cursor: none;"
}

renderer.draw = function()
{
	//Draw game
	scene.draw(); 
	enemy.draw();
	ammopack.draw();
	player.draw();
	hud.draw();
};