class PlayScene extends Phaser.Scene
{
    constructor()
    {
        super('play');
        this.top_score = 0;
    }
    
    preload()
    {
      this.load.path= 'assets/';
      this.load.image('background','background.png');
      
      let size = {frameWidth:44 ,frameHeight:60 };
      this.load.spritesheet('Player' ,'Player.png', size);
      
      this.load.image('enemy','enemy.png');
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
        this.enemies.children.iterate( (enemy) => enemy.move()  );
        this.update_score();
    }
    
    create_map()
    {
        this.add.image(640/2, 480/2, 'background');
    }
    
    create_objects()
    {
        this.enemies = this.physics.add.group();
        
        this.time.addEvent({
            delay:300,
            callback: this.spawn_enemy,
            callbackScope: this,
            loop: true
        }, this);
    }
    
    spawn_enemy()
    {
        let monster = new Enemy(this);
        this.enemies.add(monster);
        this.score += 1;
    }
    
    game_over()
    {
        this.scene.restart();
    }
    
    setup_physics()
    {
        this.physics.add.overlap(this.player, this.enemies, this.game_over, null, this);
    }
    
    setup_hud()
    {
        this.score = 0;
        this.scoreText = this.add.text(32,32,'');
        this.scoreText.depth = 2;
        
        this.top_score_text = this.add.text(600, 32, '')
        this.top_score_text.depth =2;
        this.top_score_text.setOrigin(1,)
    }
    
    update_score()
    {
        this.scoreText.setText("Score: " + this.score);
        if (this.score >= this.top_score)
        {
            this.top_score = this.score;
        }
        this.top_score_text.setText("Top Score: " + this.top_score);
        this.top_score_text.setStyle({fill:"#fffffff"});
    }
}