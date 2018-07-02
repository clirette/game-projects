game = new Object();

game.score = 0;
game.timer = 30
;
game.startTime = Date.now();

game.start = function()
{
	alert("Warning!!!! Dis Dank Gam Iz On Hrd Moede Click Ok To Cantinoe")
	input.start();
	renderer.start();
	game.main();
};

// The main game loop
game.main = function() 
{ 
	if(game.timer > 0 && player.ammo > 0)
	{
		
	
	game.update();
	renderer.draw();
	
	}
	else
	{
	hud.drawGameOver();	
	}
	window.requestAnimationFrame(game.main);
};

// Update game objects
game.update = function() 
{
	player.move(input.x, input.y);
	var now = Date.now()
	game.timer -= (now - game.startTime)/1000
	if(now - enemy.age > 750)
		{
	enemy.move();
	}
	if(player.isTouching(enemy) && player.isAttacking == true)
	{
		
		game.score += 1;
		enemy.move();
	}

	player.isAttacking = false;
	game.startTime = now;
};