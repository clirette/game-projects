class PlayScene extends Phaser.Scene
{
    constructor()
    {
         super('play');
    }
    preload()
    {
        this.load.path = 'assets/';
        this.load.image('background', 'background.png');
        this.load.image('player', 'player.png');
        this.load.image('enemy', 'enemy.png')
    }
    create()
    {
        this.create_map();
        this.player = new Player(this);
        this.create_objects();
        this.setup_physics();
        this.setup_hud();
    }
    update()
    {
      this.player.move();  
      this.update_score();
    }
    
    create_map()
    {
        this.add.image( 640/2, 480/2,'background');   
    }
    
    spawn_enemy()
    {
        var position = new Object();
        position.x = Phaser.Math.Between(0, 640);
        position.y = Phaser.Math.Between(0, 480);
        position.y = -32;
        
        var monster = new Enemy(this, position);
        this.enemies.push(monster);
        this.score += 1;
    }
    
    create_objects()
    {
        this.enemies =[];
        
        var event = new Object();
        event.delay = 200;
        event.callback = this.spawn_enemy;
        event.callbackScope = this;
        event.loop = true;
        
        this.time.addEvent(event, this);
   }
   
   game_over()
   {
       this.scene.restart();
   }
   
   setup_physics()
   {
       this.physics.add.overlap(this.player, this.enemies, this.game_over, null, this)
   }
   
   setup_hud()
   {
       this.score = 0;
       this.score_text = this.add.text(32, 32, "")
       this.score_text.depth = 2;
       this.score_text.setColor( 'rgb(255,0,0)')
   }
   
   update_score()
   {
       this.score_text.setText("Score: " + this.score);
   }
}