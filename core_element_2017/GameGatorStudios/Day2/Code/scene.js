scene = new Object();

scene.image = new Image();
scene.image.src = "assets/Game_Gators_Background.png";

scene.draw = function()
{
	renderer.ctx.drawImage(scene.image, 0, 0, 1080, 700); 
};
