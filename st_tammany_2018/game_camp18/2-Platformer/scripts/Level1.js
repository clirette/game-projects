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
        var player_size = new Object();
        player_size.frameWidth = 32;
        player_size.frameHeight = 64;
        this.load.spritesheet('player', 'player.png', player_size);
        
        var size = new Object();
        size.frameWidth = 32;
        size.frameHeight = 32;
        this.load.spritesheet('itemMap', 'items.png', size);
        this.load.spritesheet('tileMap', 'tiles.png', size);
        
    }
    create()
    {
        this.create_map();
        this.player = new Player(this);
        this.create_objects()
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
    setup_physics()
    {
        this.physics.world.gravity.y = 800
        this.physics.add.collider(this.player, this.ground_layer);
        this.physics.add.overlap(this.player, this.group_Tesla_up, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_Tesla_down, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_collectables, this.collectable_take, null, this);
        this.physics.add.overlap(this.player, this.goal, this.next_scene, null, this);
        this.physics.add.overlap(this.player, this.group_falling, this.add_gravity, null, this);
        this.physics.add.collider(this.player, this.group_falling, this.add_gravity, null, this);
    }
    setup_camera()
    {
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBackgroundColor('rgb(90,60,60)');   
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
        var Tesla_up = new Object();
        Tesla_up.key = 'itemMap' ;
        Tesla_up.frame = 2;
        this.group_Tesla_up = this.map.createFromObjects('items', 'Tesla', Tesla_up );
        this.setup_objects(this.group_Tesla_up);
        
         var Tesla_down = new Object();
        Tesla_down.key = 'itemMap' ;
        Tesla_down.frame = 3;
        this.group_Tesla_down = this.map.createFromObjects('items', 'Tesla2', Tesla_down );
        this.setup_objects(this.group_Tesla_down);
        
        var collect_image = new Object();
        collect_image.key = 'itemMap';
        collect_image.frame = 4;
        this.group_collectables = this.map.createFromObjects('items', 'Collect', collect_image);
        this.setup_objects(this.group_collectables);
        
        var goal_image = new Object();
        goal_image.key = 'itemMap';
        goal_image.frame = 1;
        this.goal = this.map.createFromObjects('items', 'End', goal_image);
        this.setup_objects(this.goal);
         
        var falling_image = new Object();
        falling_image.key = 'tileMap';
        falling_image.frame = 3;
        this.group_falling = this.map.createFromObjects('items', 'Fall', falling_image);
        this.setup_objects(this.group_falling);
        
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
    collectable_take(player, Collect)
    {
        Collect.destroy();
    }
    next_scene(player, goal)
    {
        this.scene.start('Level2')
    }
    add_gravity(player, hazard)
    {
        hazard.body.gravity.y = -1;
        hazard.body.allowGravity = true;
    }
}