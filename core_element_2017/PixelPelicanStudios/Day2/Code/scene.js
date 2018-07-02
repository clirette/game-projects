scene = new Object();

scene.image = new Image();
scene.image.src = "assets/Pixle_Pelican_Stary Galaxy.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 500, 375 ); 
};
