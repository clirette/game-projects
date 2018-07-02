var exit = new Exit();

function Exit()
{

    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "Assets/Door/Close/PlayerPossumDoor.png";
    this.doorcontrol = {};
    this.doorcontrol["open"] = new Animation(["Assets/Door/Open/Door Open0.png", "Assets/Door/Open/Door Open1.png","Assets/Door/Open/Door Open2.png","Assets/Door/Open/DoorOpen3.png",], 500);
    this.doorcontrol["opened"] = new Animation(["Assets/Door/Open/PlayerPossumDoor Opened.png"]);
    this.doorcontrol["closed"] = new Animation(["Assets/Door/Close/PlayerPossumDoor.png"]);
    this.doorstate = "closed";
    this.isopened = false;

    this.draw = function()
    {
        var sprite = this.doorcontrol[this.doorstate];
        exit.image = sprite.getImage();
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        // #Are they touching?
        return ( Math.abs(this.x - gameObject.x) < 8 &&
                 Math.abs(this.y - gameObject.y) < 8); 
    };
}



