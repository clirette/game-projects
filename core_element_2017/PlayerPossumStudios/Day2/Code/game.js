var game = new Object();

game.score = 0;

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
	player.move(input.x - 39, input.y - 39);
	var now = Date.now();
	if((now - enemy.age) > 1250) {
	enemy.move();
	}
	if (player.isTouching(enemy) && player.isAttacking) {
		
		enemy.move();
		now = Date.now
		game.score += 1;
	}
	player.isAttacking = false
	
	/*var actbonus = ~~(Math.random()*60)
	if (actbonus == 30) {
		activateBonus()
	}
	console.log(actbonus);
	
	function activateBonus() {
		var counter = 0
		
		while (counter < 6) {
			
	var now2 = Date.now();
	
	if((now2 - bonustarget.age) > 1250) {
	bonustarget.move();
	}
	if (player.isTouching(bonustarget) && player.isAttacking) {
		
		bonustarget.move();
		now2 = Date.now
		game.score += 1;
	}
	player.isAttacking = false
	counter++;
		}
	}
};*/
}