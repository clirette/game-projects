var friction = 0.8;                 
var gravity = 0.3;
const TERMINAL = 8;                 

var player = new Object();

player.x = null;        
player.y = null;
player.width = 32;                  
player.height = 32;                 
player.image = new Image();
player.image.src = "Assets/Player/Player_Possum_Hero.png";
player.health = 100;
player.speed = 4;
player.velX = 0;                    
player.velY = 0;                    
player.isJumping = false;

player.poses = {};
player.poses["right"] = new Animation(["Assets/Walk_Right0.png", "Assets/Walk_Right1.png", "Assets/Walk_Right2.png", "Assets/Walk_Right3.png" ], 75);
player.poses["left"] = new Animation(["Assets/Walk_Left0.png", "Assets/Walk_Left1.png", "Assets/Walk_Left2.png", "Assets/Walk_Left3.png" ], 75);
player.poses["front"] = new Animation(["Assets/Player/Player_Possum_Hero.png"], 75);
player.currentpose = "front";



player.draw = function()
{
    renderer.ctx.drawImage( player.image, player.x, player.y, player.width, player.height ); 
    
    if(input.keysDown.size > 0) {
        var sprite = player.poses[player.currentpose];
        player.image = sprite.getImage();
    } else {
        player.currentpose = "front";
        var sprite = player.poses[player.currentpose];
        player.image = sprite.getImage();
    }
};

player.isTouching = function( gameObject )
{ 
    return ( player.x <= (gameObject.x + 24) 
             && gameObject.x <= (player.x + 24)
             && player.y <= (gameObject.y + gameObject.height)
             && gameObject.y <= (player.y + player.height) ); 
};

player.move = function(x, y)
{
    /*Left/Right Movement*/

    // player holding left
    
    if ( (input.keysDown.has(37) || input.keysDown.has(65) ) && player.velX > -player.speed) 
    { 
        player.velX--; 
        player.currentpose = "left"
    }
    // player holding right
    if ( (input.keysDown.has(39) || input.keysDown.has(68) ) && player.velX < player.speed) 
    { 
        player.velX++;
        player.currentpose = "right"
    }
    player.velX *= friction;

    /*Jumping*/
    if ( (input.keysDown.has(38) || input.keysDown.has(32) ) && !player.isJumping) 
    {
        if(exit.isTouching(player)) {
            if (exit.isopened == true) {
                var age = Date.now();
                
                while ((Date.now() - age) < 500) {
                    
                    
                }
                
                 game.level++
             if(game.level < maps.length) {
                 var level = maps [game.level];
                 scene = new Scene ();
                 scene.setScene(level);
                 exit.doorstate = "closed";
                 exit.draw();
                 exit.isopened = false;
             } else {
                 game.isOver = true;
             }
            }
        } else {
        player.isJumping = true;
        player.velY = -player.speed*2;
        }
    }

    //Apply terminal velocity
    if (player.velY < TERMINAL)
    {
        player.velY += gravity;
    }

    //Check for collisons --> affects player velocity
    for (var i=0; i<scene.blocks.length; i++)
    {
        var block = scene.blocks[i];
        if (player.isTouching(block) )
        {
            //check for bottom collisions
            if (player.y+24 < block.y && player.velY >= 0)
            {
                player.isJumping = false;
                player.velY = 0;
            }
            //check for top collisions
            else if (player.y > block.y+24 && player.velY < 0)
            {
                player.velY = 0;
                player.y = block.y + 24 + 1
            }
            //check for left collisions
            if (player.x < block.x+32 && player.velX < 0 && Math.abs(block.y - player.y) < 8 )
            {
                player.velX = 0;
                player.x = block.x+32+1
            }

            //check for right collisions
            else if (player.x+32 > block.x && player.velX > 0 && Math.abs(block.y - player.y) < 8 )
            {
                player.velX = 0;
                player.x = block.x - 32 - 1
            }
        }
    }

    //Velocity affects player position
    player.x += player.velX ;
    player.y += player.velY;
};


