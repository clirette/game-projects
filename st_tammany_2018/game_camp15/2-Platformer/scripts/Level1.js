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
        this.load.image('tiles','tiles.png');
        this.load.image('player','Player.png');

        var size = new Object();
        size.frameWidth = 32;
        size.frameHeight = 32;
        this.load.spritesheet('itemMap', 'items.png',size);
    }
    create()
    {
       this.create_map(); 
       this.player = new Player(this);
       this.create_object();
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
        this.ground_layer.setCollisionByProperty(property)
    }
    setup_physics()
    {
        this.physics.world.gravity.y = 600;
        this.physics.add.collider(this.player, this.ground_layer);
        this.physics.add.overlap(this.player, this.group_hazard, this.game_over, null, this)
        this.physics.add.overlap(this.player,this.group_diamonds, this.diamond_take, null, this)
        this.physics.add.overlap(this.player,this.goal,this.next_scene,null,this)
    }
    
    setup_camera()
    {
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.setBackgroundColor('rgb(90,90,120)')
    }
    
    game_over(player=null,hazard=null)
    {
        if (this.player.y > this.map.heightInPixels)
        {
            this.scene.restart();
        }
        if (hazard!== null)
        {
            this.scene.restart();
        }
    }
    
    create_object()
    {
        var hazard_image = new Object();
        hazard_image.key = 'itemMap';
        hazard_image.frame = 0;
        this.group_hazard = this.map.createFromObjects('items','hazard',hazard_image);
        this.setup_objects(this.group_hazard);
        
        var collect_image = new Object();
        collect_image.key = 'itemMap';
        collect_image.frame = 2;
        this.group_diamonds = this.map.createFromObjects('items','diamond',collect_image)
        this.setup_objects(this.group_diamonds);
        
        var goal_image = new Object();
        goal_image.key = 'itemMap';
        goal_image.frame = 3;
        this.goal = this.map.createFromObjects('items','exit',goal_image);
        this.setup_objects(this.goal);
    }
    
    setup_objects(objGroup)
    {
        for (var obj of objGroup)
        {
            this.physics.add.existing(obj);
            obj.body.immovable = true;
            obj.body.allowGravity = false;
        }
    }
    
    diamond_take(player, diamond)
    {
        diamond.destroy()
    }
    
    next_scene(player, exit)
    {
        this.scene.start('Level2');
    }
}