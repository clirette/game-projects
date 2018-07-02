scene = new Object();

scene.image = new Image();
scene.image.src = "assets/Byte_Bees_Scene.png";

scene.draw = function()
{
	renderer.ctx.drawImage( scene.image, 0, 0, 512, 512 ); 
};
