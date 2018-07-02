function LavaHazard()
{
    var lava = new Object();
    this.x = null;
    this.y = null
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.scr = "Assets/lava_0.png"
    
     this.poses = {}
     this.poses['itself'] = new Animation (["Assets/lava_0.png", "Assets/lava_1.png"])
     this.currentPose = "itself"
     
    var sprite = this.poses[this.currentPose];
    this.image = sprite.getImage();
    var lavaudio = new Audio("/CrazyCatfish.github.io/Media/sound/effects/Movement/Jumping and Landing/DryLava.mp3")
    lavaudio.play();
    
    
    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height );
    };
    
    this.isTouching = function( gameObject )
    {
        return  ( Math.abs(this.x - gameObject.x < 24) &&
                this.y+this.height/2 <= (gameObject.y + gameObject.height)&&
                gameObject.y <= (this.y +this.height) );
    }
};


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

function fullHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/tile-spikes.png";

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
