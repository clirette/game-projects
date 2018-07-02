function FloorHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/tile-spikes-floor.png";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y+this.height/2 <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height) ); 
    }
};


function CeilingHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/tile-spikes-ceiling.png";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height/2) ); 
    }

};

function WaterHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/Water1.png";
    this.sprite = new Animation(["Assets/Water1.png", "Assets/Water2.png"]);

    this.draw = function()
    {
        this.image = this.sprite.getImage();
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height) ); 
    }

};
