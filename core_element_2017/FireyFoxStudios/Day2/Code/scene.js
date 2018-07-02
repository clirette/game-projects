scene = new Object();

scene.image = new Image();
scene.image.src = "";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0 ); 
};
