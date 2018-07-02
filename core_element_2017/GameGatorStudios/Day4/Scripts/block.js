function Block(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "GG assets/Game_Gator_Cool_Rad_Briccs.png"

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




