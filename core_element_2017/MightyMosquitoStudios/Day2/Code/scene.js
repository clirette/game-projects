scene = new Object();

scene.image = new Image();
scene.image.src = "assets/Scene.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 1500, 760);
};
