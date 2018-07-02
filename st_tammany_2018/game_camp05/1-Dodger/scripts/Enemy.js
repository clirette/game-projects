class Enemy extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,postition)
    {
        super(scene,postition.x,postition.y, 'enemy');
        this.depth = 1;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.velocity.y = Phaser.Math.Between(300,400);
        this.body.setSize(this.width-16,this.height-16);
    }
}