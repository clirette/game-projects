game = new Object();

game.score = 0;
game.timer = 0;
game.startTime = null;
game.isOver = false;
game.level = 0;

game.start = function()
{
    var level = maps[game.level]
    scene.setScene(level)
    game.startTime = Date.now();
    input.start();
    game.main();
    var audio = new Audio("Assets/mm2wood.mp3")
    audio.loop = true
    audio.play()
};

// The main game loop
game.main = function() 
{ 
    if (game.isOver == false)
    {
        game.update();
        renderer.draw();
        window.requestAnimationFrame(game.main);
    }

};

// Update game objects
game.update = function() 
{
    player.move(input.x, input.y);

if (exit.isTouching(player) )
    {
        game.level++
        var audio = new Audio("Assets/door.mp3")
        audio.play();
        if (game.level <maps.length)
        {
            var level = maps[game.level]
            scene = new Scene()
            scene.setScene(level)
        }
        else
        {
            var audio = new Audio("Assets/13-beat-boss.mp3")
            audio.play()
            game.isOver = true
        }
    }
    for ( i in scene.hazards)
    {
        var hazard = scene.hazards[i];
        if ( hazard.isTouching(player) )
        {
            //game.isOver =
            var level = maps[game.level]
            scene = new Scene()
            scene.setScene(level)
            var audio = new Audio("Assets/dead.mp3")
            audio.play();
        }
    }
};

