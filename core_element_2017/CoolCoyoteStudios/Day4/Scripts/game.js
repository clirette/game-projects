game = new Object();

game.score = 0;
game.timer = 0;
game.startTime = null;
game.isOver = false;
game.level = 0;


game.start = function()
{
    var level = maps[game.level]
    scene.setScene(level);
    
    game.startTime = Date.now();
    input.start();
    game.main();
    var audio=new Audio("Assets/Juhani Junkala [Retro Game Music Pack] Level 1.wav");
            console.log(audio)
            audio.play()
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
    }
        window.requestAnimationFrame(game.main);
    

};

// Update game objects
game.update = function() 
{
    player.move(input.x, input.y);
    if(exit.isTouching(player) )
    {
        game.level++;
        if (game.level < maps.length)
        {
            var level = maps[game.level];
            scene = new Scene();
            scene.setScene(level);
        }
        else
        {
            game.isOver = true;
        }
    }
    
    
    for ( i in scene.hazards)
    {
        var hazard = scene.hazards[i];
        if ( hazard.isTouching(player) )
        {
            game.isOver = true;
            
        }
            
        }
    
 };



var audio = new Audio("Assets/sfx_deathscream_human1.wav");
console.log(audio);
audio.play();
