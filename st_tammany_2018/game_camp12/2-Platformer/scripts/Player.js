class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene,0,0,'player');
        var start = scene.map.findObject('items', obj => obj.name === 'player');
        this.x = start.x;
        this.y = start.y;
        this.depth = -1;
        this.speed = 230;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.arrow_keys = scene.input.keyboard.addKeys('up,left,right');
        this.setup_animations(scene);
    
    }
    move()
    {
        if(this.body === undefined)
        {
            return;
        }
        var move_animation = 'idle';
        this.body.velocity.x = 0;
        
        if (this.arrow_keys.up.isDown && this.body.onFloor())
        {
            this.body.velocity.y = -this.speed * 2;
        }
        
    if (this.arrow_keys.left.isDown)
        {
            this.body.velocity.x = -this.speed;
            move_animation = 'right'
            
        }
    if (this.arrow_keys.right.isDown)
        {
            this.body.velocity.x = this.speed;
            move_animation = 'left'
        }
    if ( !this.body.onFloor())
    {
        move_animation = 'jump'
    }
        
        this.anims.play(move_animation, true);
    }

            
    setup_animations(scene)
    {  
        var idle = new Object();
        idle.key = 'idle';
        idle.frames = scene.anims.generateFrameNumbers('player',{start:2, end:3});
        idle.framerate = 0;
        scene.anims.create(idle);
        
        var left = new Object();
        left.key = 'left';
        left.frames = scene.anims.generateFrameNumbers('player',{start:4, end:7});
        left.framerate = 0;
        scene.anims.create(left);
        
        var right = new Object();
        right.key = 'right';
        right.frames = scene.anims.generateFrameNumbers('player',{start:8, end:11});
        right.framerate = 0;
        scene.anims.create(right);
        
        
        var jump = new Object();
        jump.key = 'jump';
        jump.frames = scene.anims.generateFrameNumbers('player',{start:12, end:12});
        jump.framerate = 0;
        scene.anims.create(jump);
    }

}