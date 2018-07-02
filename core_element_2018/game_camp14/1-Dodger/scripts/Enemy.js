class Enemy extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene, -32,-32,'enemy');
        this.x = Phaser.Math.Between(8,640);
        this.depth = 1;
        this.speed = Phaser.Math.Between(2,6);
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    
    move()
    {
        this.y += this.speed;
    }
}    