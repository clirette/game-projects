scene = new Object();

scene.image = new Image();
scene.image.src = "assets/AAS Scene.gif";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 500, 375 ); 
};
