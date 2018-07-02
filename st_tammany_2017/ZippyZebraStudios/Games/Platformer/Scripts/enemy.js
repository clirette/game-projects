function FloorHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/firefloorhazard0.png";
    this.animation=new Animation(["Assets/firefloorhazard0.png",
                                  "Assets/firefloorhazard1.png",
                                  "Assets/firefloorhazard2.png",
                                  "Assets/firefloorhazard3.png"])

    this.draw = function()
    {
        this.image = this.animation.getImage()
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
    this.image.src = "Assets/wireCeilingHazard0.png";
    this.animation=new Animation(["Assets/wireCeilingHazard0.png",
                                  "Assets/wireCeilingHazard1.png"])


    this.draw = function()
    {
        this.image = this.animation.getImage()
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height/2) ); 
    }

};

function FullHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height) ); 
    }

};
