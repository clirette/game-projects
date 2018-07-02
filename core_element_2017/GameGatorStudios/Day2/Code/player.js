player = new Object();

player.x = viewport.width/2;
player.y = viewport.height/2;
player.image = new Image();
player.image.src = "assets/Game_Gator _Pure_Beauty.png";
player.width = 96;
player.height = 96;
player.isAttacking = false

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
	player.x = x - (player.height/ 2);
	player.y = y - (player.width/ 2);
}


player.attack = function()
{
	player.isAttacking = true
};