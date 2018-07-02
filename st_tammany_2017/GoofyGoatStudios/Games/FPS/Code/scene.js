scene = new Object();

scene.image = new Image();
scene.image.src = "Assets/background.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0,viewport.width, viewport.height); 
};
