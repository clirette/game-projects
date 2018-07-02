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
        var size = {frameWidth:40, frameHeight:54};
        var ItemSize = {frameWidth:32, frameHeight:32};
        this.load.spritesheet('player','player.png',size);
        this.load.spritesheet('itemMap', 'items.png',ItemSize);
    }
    create()
    {
        this.create_map();
        this.player = new Player(this);
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
        this.map = this.make.tilemap( {key: this.map_key} );
        var ground_tiles = this.map.addTilesetImage('tiles');
        this.ground_layer = this.map.createStaticLayer('tiles',ground_tiles);
        var property = {terrain:'block'};
        this.ground_layer.setCollisionByProperty(property);
    }
    
    setup_physics()
    {
        this.physics.add.world.gravity.y=1000;
        this.physics.add.collider(this.player, this.ground_layer);
        this.physics.add.overlap(this.player, this.group_hazard1, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_hazard2, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_collectibles, this.rock_take, null,this);
        this.physics.add.overlap(this.player, this.goal, this.next_scene, null,this);
        this.physics.add.collider(this.player, this.group_falling, this.add_gravity, null, this);
    }
    
    setup_camera()
    {
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBackgroundColor('rgb(169,208,254)');
    }
    
    game_over(player = null,hazard = null)
    {
        if (this.player.y>this.map.heightInPixels)
        {
            this.scene.restart();
        }
        if (hazard !== null)
        {
            this.scene.restart();
        }
    }
    
    create_objects()
    {
        var hazard1_image = new Object();
         hazard1_image.key = 'itemMap';
         hazard1_image.frame = 1;
         this.group_hazard1 = this.map.createFromObjects('items','SpikeUp', hazard1_image);
         this.setup_objects(this.group_hazard1);
          
         var hazard2_image = new Object();
         hazard2_image.key = 'itemMap';
         hazard2_image.frame = 0;
         this.group_hazard2 = this.map.createFromObjects('items','SpikeDown', hazard2_image);
         this.setup_objects(this.group_hazard2);
         
         var collect_image = new Object();
         collect_image.key = 'itemMap';
         collect_image.frame = 2;
         this.group_collectibles = this.map.createFromObjects('items', 'Coin', collect_image);
         this.setup_objects(this.group_collectibles);
         
         var goal_image = new Object();
         goal_image.key = 'itemMap';
         goal_image.frame = 4;
         this.goal = this.map.createFromObjects('items', 'Ender', goal_image);
         this.setup_objects(this.goal);
         
         var falling_image = new Object();
         falling_image.key = 'itemMap';
         falling_image.frame = 6;
         this.group_falling = this.map.createFromObjects('items', 'falling', falling_image);
         this.setup_objects(this.group_falling);
    }
    
    setup_objects( objGroup)
    {
        for (var obj of objGroup)
        {
            this.physics.add.existing(obj);
            obj.body.immovable = true;
            obj.body.allowGravity = false;
        }
    }
    
    rock_take( player, Coin)
    {
        Coin.destroy();
    }
    next_scene(player, goal)
    {
        this.scene.start('Level2');
    }
    add_gravity(player, hazard)
    {
        hazard.body.gravity.y = -1;
        hazard.body.allowGravity = true;
    }
}