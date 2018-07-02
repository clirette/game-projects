var clips = new Object()
clips.clip = 1
clips.log =  document.getElementById("log");
clips.logbutton = document.getElementById("logbutton");
clips.playing = false;

function checkclip() {
    
    if (clips.clip == 1) {
        clips.log.innerHTML = "My favorite thing to do is..."
        clips.logbutton.value =  "What is it???"
        clips.clip ++
    } else if (clips.clip == 2) {
        renderer.canvas.width = 64
        renderer.ctx.drawImage( player.image, player.x, player.y, player.width, player.height );
        renderer.ctx.drawImage( villain.image, 32, 0, villain.width, villain.height );
        clips.log.innerHTML = "Enemy: Ha ha ha ha ha!!!";
        clips.logbutton.value =  "Who are you?";
        clips.clip ++
    } else if (clips.clip == 3) {
        clips.log.innerHTML = "Enemy: I am THE MAN WITH NO HEAD!!!!!! Ha ha ha ha!!!";
        clips.logbutton.value =  "You're going down!!!";
        clips.clip ++
    }else if (clips.clip == 4) {
        clips.log.innerHTML = "";
        clips.logbutton.value =  "";
        clips.clip ++
        renderer.canvas.width = 1080
        renderer.canvas.height = 700
        game.start();
    }
    else if (clips.clip == 5) {
        
        renderer.canvas.width = 64;
        renderer.canvas.height = 32;
        viewport.width =  renderer.canvas.width;
        viewport.height = renderer.canvas.height;
        console.log(viewport.width);
        console.log(viewport.height);
        
        renderer.ctx.clearRect(0, 0, viewport.width, viewport.height);
        var block = new Block(0, 0, 32, 32, "Assets/Player/Player_Possum_Hero.png");
        
        renderer.ctx.drawImage( player.image, 0, 0, player.width, player.height );
        renderer.ctx.drawImage( villain.image, 32, 0, villain.width, villain.height );
        clips.log.innerHTML = "Enemy: Well, I see you got through my first level";
        clips.logbutton.value =  "Piece of cake!!!";
        clips.clip ++
        
    }/* else if (clips.clip == 6) {
        clips.log.innerHtml = "";
        clips.logbutton.value =  "";
        clips.clip ++
        renderer.canvas.width = 1080
        renderer.canvas.height = 700
        game.start();
    } */
} 

clips.first = new function () {
    
    //SSclips.logbutton.addEventListener("click", clips.checkclip);
    renderer.ctx.drawImage( player.image, player.x, player.y, player.width, player.height );
    
     
}