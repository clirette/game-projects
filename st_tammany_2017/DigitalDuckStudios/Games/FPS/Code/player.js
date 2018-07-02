player = new Object();

player.x = null;
player.y = null;
player.image = new Image();
player.image.src = "Assets/crosshair.png";
player.width = 32;
player.height = 32;
player.isAttacking = false;
player.ammo = 10

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
	if(player.ammo > 0)
	{
		player.isAttacking = true;
		player.ammo -= 1
	}
	else
	{
	//	player.ammo = 10
	}

};