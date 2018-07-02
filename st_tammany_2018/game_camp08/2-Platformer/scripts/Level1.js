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
        var size = new Object();
        size.frameWidth = 64;
        size.frameHeight = 64;
        this.load.spritesheet('player', 'player.png', size);
        
        var size = new Object ();
        size.frameWidth = 32;
        size.frameHeight = 32;
        this.load.spritesheet('itemMap', 'items.png',size)
        this.load.spritesheet('tileMap', 'tiles.png', size);
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
        this.map = this.make.tilemap( {key:this.map_key} );
        var ground_tiles = this.map.addTilesetImage('tiles');
        this.ground_layer = this.map.createStaticLayer('tiles',ground_tiles);
        var property = {terrain:'block'};
        this.ground_layer.setCollisionByProperty(property);
    }
    
    setup_physics()
    {
        this.physics.world.gravity.y = 600
        this.physics.add.collider(this.player, this.ground_layer);
        this.physics.add.overlap(this.player, this.group_spike, this.game_over, null, this);
        this.physics.add.overlap(this.player, this.group_collectables, this.coin_take, null, this);
        this.physics.add.overlap(this.player, this.mushroom, this.next_scene, null, this);
        this.physics.add.collider(this.player, this.group_fall, this.add_gravity, null, this);
   }
    
    setup_camera()
    {
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBackgroundColor('rgb(120,120,120)')
    }
    
    game_over(player=null,spike=null)
    {
        if (this.player.y > this.map.heightInPixels)
        {
            this.scene.restart();
        }
        if (spike !== null)
        {
            this.scene.restart();
        }
    
    }
    
    create_objects()
    {
        var spike_image = new Object();
        spike_image.key = 'itemMap';
        spike_image.frame = 0;
        this.group_spike = this.map.createFromObjects('items', 'spike', spike_image);
        this.setup_objects(this.group_spike);
        
        var coin_image = new Object();
        coin_image.key = 'itemMap';
        coin_image.frame = 5;
        this.group_collectables = this.map.createFromObjects('items', 'coin', coin_image);
        this.setup_objects(this.group_collectables);
        
        var mushroom_image = new Object();
        mushroom_image.key = 'itemMap';
        mushroom_image.frame = 2;
        this.mushroom = this.map.createFromObjects('items', 'mushroom', mushroom_image);
        this.setup_objects(this.mushroom);
        
        var fall_image = new Object();
        fall_image.key = 'tileMap';
        fall_image.frame = 2
        this.group_fall = this.map.createFromObjects('items', 'fall', fall_image)
        this.setup_objects(this.group_fall)
        
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
    
    coin_take( player, coin)
    {
        coin.destroy();
    }
    
    next_scene(player, mushroom)
    {
        this.scene.start('Level2');
    }
    
    add_gravity(player, hazard)
    {
        hazard.body.gravity.y = -1;
        hazard.body.allowGravity =true;
    }
}