class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene,0,0,'player');
        var start = scene.map.findObject('items', obj => obj.name === 'player');
        this.x = start.x;
        this.y = start.y;
        this.depth = -1;
        this.speed = 275;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(false);
        
        this.arrow_keys = scene.input.keyboard.addKeys('up,left,right');
        this.setup_animations(scene);
    }
    move()
    {
        if (this.body === undefined)
        {
            return;
        }
        
        var move_animation = 'idle'
        
        this.body.velocity.x = 0;
        
        if (this.arrow_keys.up.isDown && (this.body.onFloor() || this.body.touching.down))
        {
            this.body.velocity.y = -this.speed * 2;
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
        idle_animation.frames = scene.anims.generateFrameNumbers('player', {start:0, end:8});
        idle_animation.frameRate = 6
        scene.anims.create(idle_animation);
        
    }
}