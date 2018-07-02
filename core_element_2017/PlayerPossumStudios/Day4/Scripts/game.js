game = new Object();

game.score = 0;
game.timer = 0;
game.startTime = null;
game.isOver = false;
game.level = 0;
var audio = new Audio("Assets/sfx_wpn_laser 10.wav");
game.start = function()
{
    var level = maps[game.level];
    scene.setScene(level);
    game.startTime = Date.now();
    input.start();
    game.main();
    
};

// The main game loop
game.main = function() 
{ 
    if (game.isOver == false)
    {
        game.update();
        renderer.draw();
        //window.requestAnimationFrame(game.main);
    } else {
        hud.drawGameOver()
       
    }
    window.requestAnimationFrame(game.main);
     if (input.keysDown.has(13)) {
            game.isOver = false;
            var level = maps[game.level];
            scene = new Scene();
            scene.setScene(level);
        }
};

// Update game objects
game.update = function() 
{
    viewport.width =  renderer.canvas.width;
    viewport.height = renderer.canvas.height;
    player.move(input.x, input.y);
    
    if(exit.isTouching(player) && exit.isopened == false) {
        exit.doorstate = "open";
        exit.draw();
        //console.log(exit.image.src);
    }
    if(exit.image.src.includes ("Assets/Door/Open/DoorOpen3.png")) {
            exit.doorstate = "opened";
            exit.isopened = true;
              
        }
    
    if(player.x > renderer.canvas.width && clips.playing == false) {
        game.isOver = true;
        audio.play();
    }
    
   if(player.y > renderer.canvas.height && clips.playing == false) {
        game.isOver = true;
        audio.play();
    }

    for ( i in scene.hazards)
    {
        var hazard = scene.hazards[i];
        if ( hazard.isTouching(player) )
        {
            audio.play()
            game.isOver = true;
            
        }
    }
};


            