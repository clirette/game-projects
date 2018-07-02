game = new Object();

game.score = 0;
game.missed = 0;
game.hit = 0;
game.ammo = 75;
game.timer = 30;
game.startTime = Date.now();
game.timerend = Date.now();

game.start = function()
{
	input.start();
	renderer.start();
	game.main();
};

// The main game loop
game.main = function() 
{ 
	if(game.ammo >= 0 && game.missed < 20 && game.timer > 0)
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
	if (now - enemy.age > 1000) 
	{
			enemy.move();
			game.missed += 1;
			game.score -= 1;
	}
	if (player.isTouching(enemy) && player.isAttacking == true)
	{
		game.score += 1;
		game.hit += 1;
		enemy.move();
	}
	
	if (player.isTouching(ammopack) && player.isAttacking == true)
	{
		game.ammo += 25
		ammopack.x= -100
		ammopack.age = Date.now()
	}
	if (now - ammopack.age > 10000)
	{
		ammopack.move()
	}
	
	
	player.isAttacking = false;
	game.startTime = now;
	
	if (game.timer > 0);
	{
		game.timerend = Date.now()
	}
	if (now - game.timerend  > 1000)
	{
		game.ammo -= 5
	}
};
