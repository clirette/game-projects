player = new Object();

player.x = viewport.height;
player.y = viewport.width;
player.image = new Image();
player.image.src = "assets/crosshair.png";
player.width = 32;
player.height = 32;
player.isAttacking=false;


player.draw = function()
{
	renderer.ctx.drawImage( player.image, player.x, player.y, player.width, player.height ); 
};

player.isTouching = function( gameObject )
{ 
	// #Are they touching?
	return ( player.x <= (gameObject.x + gameObject.width) 
	     	 && gameObject.x <= (player.x + player.width)
		 	 && player.y <= (gameObject.y + gameObject.height)
		 	 && gameObject.y <= (player.y + player.height) ); 
}

player.move = function(x, y)
{
	player.x = x;
	player.y = y;
}


player.attack = function()
{
	player.isAttacking=true;
	game.ammo -=1
};