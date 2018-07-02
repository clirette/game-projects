class Level1 extends Phaser.Scene 
{
    constructor(name='Level1') 
    {
        super(name); 
        this.map_key = 'map1';
        this.map_json = 'level1.json';
    }
    preload()  
    {
        this.load.path = 'assets/';
        this.load.tilemapTiledJSON(this.map_key, this.map_json);
        this.load.image('tiles', 'tiles.png');
        this.load.image('player','player.png');
        this.load.image('enemy','enemy.png');
        
        var size = new Object();
        size.frameWidth = 32;
        size.frameHeight = 32;
        this.load.spritesheet('itemMap', 'items.png',size);
    }
    create()
    {
        this.create_map();
        this.player = new Player(this);
        this.create_monsters();
        this.create_objects();
        this.setup_physics();
        this.setup_camera();
    }
    update()
    {
      this.player.move();
      this.game_over();
    }
    create_map()
    {
        this.map = this.make.tilemap( {key:this.map_key} );
        var ground_tiles = this.map.addTilesetImage('tiles');
        this.ground_layer = this.map.createStaticLayer('tiles',ground_tiles);
        var property = {terrain:'block'};
        this.ground_layer.setCollisionByProperty(property);
    }
    
    create_monsters()
    {
        this.groupMonsters = [];
        let enemy_tiles = this.map.filterObjects('items', (obj) => obj.type === 'enemy-down');
        for (let tile of enemy_tiles)
        {
            let enemy_config = {x: tile.x, y: tile.y};
            let monster = new Enemy(this, enemy_config);
            this.groupMonsters.push(monster);
        }
    }
    
    setup_physics()
    {
        this.physics.world.gravity.y = 600;
        this.physics.add.collider(this.player, this.ground_layer);
        this.physics.add.overlap(this.player, this.group_hazard1, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_hazard2, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_collectables, this.coin_take, null, this);
        this.physics.add.overlap(this.player, this.group_apples, this.apple_take, null, this);
        this.physics.add.overlap(this.player, this.goal, this.next_scene, null, this);
        this.physics.add.overlap(this.player, this.groupMonsters, this.next_scene, null, this);
    }
    
    setup_camera()
    {
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBackgroundColor('rgb(3,129,255)');
    }
    
    game_over(player=null,hazard=null)
    {
        if (this.player.y > this.map.heightInPixels)
        {
            this.scene.restart();
        }
        if (hazard != null)
        {
            this.scene.restart();
        }
    }
    
    create_objects()
    {
        var hazard1_image = new Object();
        hazard1_image.key = 'itemMap';
        hazard1_image.frame=0;
        this.group_hazard1 = this.map.createFromObjects('items', 'spike', hazard1_image)
        this.setup_objects(this.group_hazard1);
        
        var hazard2_image = new Object();
        hazard2_image.key = 'itemMap';
        hazard2_image.frame=1;
        this.group_hazard2 = this.map.createFromObjects('items', 'black widow', hazard2_image)
        this.setup_objects(this.group_hazard2);
        
        var collect_image = new Object();
        collect_image.key = 'itemMap'
        collect_image.frame =2;
        this.group_collectables = this.map.createFromObjects('items','red',collect_image);
        this.setup_objects(this.group_collectables);
        
        var collect_apple = new Object();
        collect_apple.key = 'itemMap'
        collect_apple.frame =3;
        this.group_apples = this.map.createFromObjects('items','apple',collect_apple);
        this.setup_objects(this.group_apples);
        
        var goal_image = new Object();
        goal_image.key = 'itemMap';
        goal_image.frame = 4;
        this.goal = this.map.createFromObjects('items','exit',goal_image);
        this.setup_objects(this.goal);
        
        
    }
    
    setup_objects( objGroup ) 
    { 
        for (var obj of objGroup)
        {
            this.physics.add.existing(obj);
            obj.body.immovable = true;
            obj.body.allowGravity = false;
        }
    }
    
    coin_take( player, coin )
    {
        coin.destroy();
    }
    
    apple_take(player, apple)
    {
        //jump higher for 3 seconds
        this.physics.world.gravity.y = 400;
        this.time.delayedCall(3000, function() {this.physics.world.gravity.y = 600;}, [], this);
        
        apple.destroy();
    }
    
    next_scene(player, goal)
    {
        this.scene.start('Level2');
    }
}