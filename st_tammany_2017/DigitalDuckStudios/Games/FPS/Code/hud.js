hud = new Object();
hud.ammo = new Object()
hud.ammo.height = 64
hud.ammo.width = 64
hud.ammo.x = 32
hud.ammo.y = 600
hud.ammo.image = new Image()
hud.ammo.image.src = "Assets/Paintball.png"

hud.draw = function()
{
	hud.drawText("Score: " +game.score, 32, 32, "left", 24);
	hud.drawText("Time: " +~~game.timer, viewport.width-32, 32, "right");
	hud.drawAmmo()
	
};



hud.drawText = function(text, x, y, align, size)
{
	// #Score
	renderer.ctx.fillStyle = "rgb(0, 0, 0)"; //set to white
	renderer.ctx.font =  size + "px Helvetica";  //set the font
	renderer.ctx.textAlign = align; //set to left
	renderer.ctx.textBaseline = "top"; //set to top
	renderer.ctx.fillText(text, x, y); //set the contents
};


hud.drawGameOver = function()
{
	//fade viewport
	renderer.ctx.fillStyle = "rgba(500,500,500,0.1)";
	renderer.ctx.fillRect(0,0,viewport.width, viewport.height);
	//print Game Over
	renderer.ctx.fillStyle = "rgb(255, 0, 0)"; //set to white
	renderer.ctx.font = "42px Helvetica";  //set the font
	renderer.ctx.textAlign = "center"; //set to left
	renderer.ctx.textBaseline = "center"; //set to top
	renderer.ctx.fillText("Game Over!", viewport.width/2, viewport.height/2); //set the contents

	renderer.canvas.style="cursor: auto;";
}

hud.drawAmmo = function()
{
	console.log(player.ammo)
	for (var i=0; i<player.ammo; i++)
	{
		renderer.ctx.drawImage(hud.ammo.image,
								hud.ammo.x + (i * hud.ammo.width),
								hud.ammo.y, 
								hud.ammo.width, 
								hud.ammo.height)
	}
	
}