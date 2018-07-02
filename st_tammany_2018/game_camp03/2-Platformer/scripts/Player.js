class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene,0,0, 'player');
        var start = scene.map.findObject('items', obj => obj.name === 'player');
        this.x = start.x;
        this.y = start.y;
        this.depth = -1;
        this.speed = 460;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.arrow_keys = scene.input.keyboard.addKeys('up,left,right');
        this.body.setSize(this.width, this.height-4);
        this.setup_animations(scene);
    }
    
    move()
    {
        if (this.body === undefined)
        {
            return;
        }
        var move_animation = 'idle';
        this.body.velocity.x=0;
        
        if(this.arrow_keys.up.isDown && (this.body.onFloor() || this.body.touching.down))
        {
            this.body.velocity.y = -this.speed*1.2;
        }
        if (this.arrow_keys.left.isDown)
        {
            this.body.velocity.x = -this.speed;
            move_animation = 'left';
        }
        if (this.arrow_keys.right.isDown)
        {
            this.body.velocity.x = this.speed;
            move_animation = 'right';
        }
        this.anims.play(move_animation, true);
    }
    
    setup_animations(scene)
    {
        var idle = new Object();
        idle.key = 'idle';
        idle.frames = scene.anims.generateFrameNumbers('player', {start:0, end:0});
        idle.frameRate = 0;
        scene.anims.create(idle);
        
        var right = new Object();
        right.key = 'right';
        right.frames = scene.anims.generateFrameNumbers('player', {start:1, end:6});
        right.frameRate = 20;
        scene.anims.create(right);
        
        var left = new Object();
        left.key = 'left';
        left.frames = scene.anims.generateFrameNumbers('player', {start:7, end:12});
        left.frameRate = 20;
        scene.anims.create(left);
    }
}