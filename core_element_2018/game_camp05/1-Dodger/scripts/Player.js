class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene)
    {
        super(scene, 300,200, 'Player');
        this.depth = 1;
        this.speed = 300;
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.arrowKeys = scene.input.keyboard.addKeys('up,down,left,right');
        this.body.setSize(this.width -20, this.height -16);
        
    }
    
    move()
    {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        
        if(this.arrowKeys.up.isDown)
        {
            this.body.velocity.y = -this.speed;
        }
        
        if (this.arrowKeys.down.isDown)
        {
            this.body.velocity.y = this.speed;
        }
        
        if (this.arrowKeys.left.isDown)
        {
            this.body.velocity.x = -this.speed; 
        }
        
        if (this.arrowKeys.right.isDown)
        {
            this.body.velocity.x = this.speed;
        }
    }
}