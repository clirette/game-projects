
var enemy = new Enemy();

function Enemy()
{
	this.x = Math.random() * (viewport.width - 100);
	this.y = Math.random() * (viewport.height - 100);
	this.image = new Image();
	this.image.src = "assets/Enemy.png";
	this.width = 100;
	this.height = 100;
	this.age = Date.now();
	
	this.draw = function()
	{
		renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
	};

	this.isTouching = function(gameObject)
	{
		return (this.x <= gameObject.x + gameObject.width &&
				this.y <= gameObject.y + gameObject.height &&
				gameObject.x <= this.x + this.width &&
				gameObject.y <= this.y + this.height);
	};

	this.attack = function()
	{

	};

	this.move = function() 
	{
	this.age = Date.now();
	this.x = Math.random() * (viewport.width - this.width);
	this.y = Math.random() * (viewport.height - this.height);
	};

}
