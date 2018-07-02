
var enemy = new Enemy();

function Enemy()
{
	this.x = 0;
	this.y = 0;
	this.image = new Image();
	this.image.src = "Assets/Enemy1.jpg"
	this.width = 32;
	this.height = 32;

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

	}

	this.move = function() 
	{

	}

}
