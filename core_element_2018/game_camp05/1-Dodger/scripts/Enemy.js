class Enemy extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene,-32,-32, 'enemy');
        this.x = Phaser.Math.Between(0,640);
        //this.y = Phaser.Math.Between(0,480);
        this.depth = 1;
        this.speed = Phaser.Math.Between(3,3);
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    
    move()
    {
        this.y += this.speed; 
    }
}