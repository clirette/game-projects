game = new Object();

game.score = 0;
game.timer = 0;
game.startTime = null;
game.isOver = false;
game.level = 4;

game.start = function()
{
    var level = maps[game.level]
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
    }
    else
    {
        hud.drawGameOver();
        if(input.keysDown.has(13))
        {
           game.isOver=false
           var level = maps[game.level]
           scene = new Scene();
           scene.setScene(level);
            
        }
    }
    window.requestAnimationFrame(game.main);

};

// Update game objects
game.update = function() 
{
    player.move(input.x, input.y);
    
    if (exit.isTouching(player))
    {
        game.level++;
        var audio2 = new Audio('GG assets/sfx_sounds_powerup2.wav');
        audio2.play();
        if(game.level<maps.length)
        {
           var level = maps[game.level]
           scene = new Scene();
           scene.setScene(level);
        }
        
        else
        {
            game.level = 4;
        }
        
    }

    for ( i in scene.hazards)
    {
        var hazard = scene.hazards[i];
        if ( hazard.isTouching(player) || player.y>750) 
        {
            game.isOver = true;
            var audio = new Audio('GG assets/sfx_sounds_damage1.wav');
            audio.play();
        }
    }
};

