class Enemy extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene,0,0,'enemy');
        this.start = start;
        this.depth = 1;
        this.speed = 50;
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.velocity.y = this.speed;
    }
}