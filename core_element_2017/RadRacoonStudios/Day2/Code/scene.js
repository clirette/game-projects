scene = new Object();

scene.image = new Image();
scene.image.src = "assets/RadRacoonStudios_Background.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 600, 600 ); 
};
