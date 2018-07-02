class Level1 extends Phaser.Scene
{
    constructor(key='Level1')
    {
        super(key);
        this.map_key = 'map1';
        this.map_json = 'level1.json';
    }
    
    preload()
    {
        this.load.path = "assets/";
        this.load.image('tiles', 'tiles.png');
        this.load.tilemapTiledJSON(this.map_key, this.map_json);
        let size = {frameWidth: 42, frameHeight: 66};
        this.load.spritesheet('player', 'player.png', size); 
        
        let item_size = {frameWidth:32, frameHeight: 32};
        this.load.spritesheet( 'itemMap','items.png', item_size);
    }
    
    create()
    {
        this.score = 0;
        this.create_map();
        this.player=new Player(this)
        this.create_objects();
        this.setup_physics();
        this.setup_camera();
        this.setup_hud();
        
    }
    
    update()
    {
        this.player.move();
        this.game_over();
        this.update_score();
    }
    
    create_map()
    {
        this.map = this.make.tilemap( {key: this.map_key} );
        let ground_tiles = this.map.addTilesetImage('tiles');
        this.ground_layer = this.map.createStaticLayer('tiles', ground_tiles);
        let wall = {terrain:['wall']};
        this.ground_layer.setCollisionByProperty(wall);
    }
    setup_physics()
    {
        this.physics.world.gravity.y = 600;
        this.physics.add.collider(this.player, this.ground_layer);
        this.physics.add.overlap(this.player, this.group_coins,this.coin_take,null, this);
        this.physics.add.overlap(this.player, this.group_hazards, this.game_over, null, this);
    }
    
    setup_camera()
    {
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,this.map.widthInPixels,this.map.heightInPixels);
        this.cameras.main.setBackgroundColor('rgb(10,0,100)');
    }
    
    game_over(player = null, hazard = null)
    {
        if (this.player.y > this.map.heightInPixels)
        {
            this.scene.restart();
        }
        if (hazard !== null)
        {
            this.scene.restart();
        }
    }

    setup_objects(objGroup)
    {
        for (let obj of objGroup)
        {
            this.physics.add.existing(obj);
            obj.body.immovible = true;
            obj.body.allowGravity = false;
        }
    }
    
    create_objects()
    {
        let coin_image = {key: 'itemMap' , frame:0 };
        this.group_coins = this.map.createFromObjects('items' , 'coin',coin_image);
        this.setup_objects(this.group_coins);
        
        let spike_image = {key:'itemMap', frame:3 };
        this.group_hazards = this.map.createFromObjects('items','spikes',spike_image);
        this.setup_objects(this.group_hazards);
    }
    
    coin_take(player, coin)
    {
        coin.destroy();
        this.score += 1;
    }
    
    setup_hud()
    {
        this.scoreText =this.add.text(32,32,'score: 0');
        this.depth =2;
        this.scoreText.setColor('rgb(53,232,80)');
        this.scoreText.setScrollFactor(0,0);
    }
    
    update_score()
    {
        this.scoreText.setText("Score: " + this.score);
    }
}   