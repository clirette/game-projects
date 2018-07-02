class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene,300,200,'player');
        this.depth = 1;
        this.speed = 250;
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        
        this.arrow_keys = scene.input.keyboard.addKeys('up,down,left,right');
        this.setup_animations(scene);
    }
    move()
    {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        
        var move_animation = 'idle'
        
        if (this.arrow_keys.up.isDown)
        {
            this.body.velocity.y = -this.speed;
        }
        if (this.arrow_keys.down.isDown)
        {
            this.body.velocity.y = this.speed;
        }
        if (this.arrow_keys.left.isDown)
        {
            this.body.velocity.x = -this.speed;
        }
        if (this.arrow_keys.right.isDown)
        {
            this.body.velocity.x = this.speed;
            
        }
         this.anims.play(move_animation, true);
    }
    setup_animations(scene)
    {
        var idle_animation = new Object();
        idle_animation.key = 'idle';
        idle_animation.frames = scene.anims.generateFrameNumbers('player', {start:0, end:9});
        idle_animation.frameRate = 4
        scene.anims.create(idle_animation);
        
    }
    
}