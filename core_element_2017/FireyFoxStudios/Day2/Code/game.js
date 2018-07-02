game = new Object();


game.start = function()
{
	input.start();
	renderer.start();
	game.main();
};

// The main game loop
game.main = function() 
{ 
	game.update();
	renderer.draw();
	window.requestAnimationFrame(game.main);
};

// Update game objects
game.update = function() 
{
	
};


