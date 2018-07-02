function Block(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/LLama_tiles_safe.png"

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
};


function Block2(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "Assets/LlamaDirtSafe.png"

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image , this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( this.x <= (gameObject.x + gameObject.width) 
                 && gameObject.x <= (this.x + this.width)
                 && this.y <= (gameObject.y + gameObject.height)
                 && gameObject.y <= (this.y + this.height) ); 
    };
};




