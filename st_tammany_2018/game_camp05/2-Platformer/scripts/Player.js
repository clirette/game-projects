class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene) 
    {
    super(scene,0,0,'player');
    var start = scene.map.findObject('items',obj => obj.name === 'player');
    this.x = start.x;
    this.y = start.y;
    this.depth = -1;
    this.speed = 180;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.arrow_keys = scene.input.keyboard.addKeys('up,left,right');
    this.set_upanimations(scene);
    this.body.setSize(this.width-16,this.height-16);
    }
    
    move()
    {
        if(this.body === undefined)
        {
            return;
        }
        
        var move_animation = 'idle'
          this.body.velocity.x = 0;
          
          if (this.arrow_keys.up.isDown &&( this.body.onFloor() || this.body.touching.down )) 
          {
              this.body.velocity.y = -this.speed*2;
          }
          if (this.arrow_keys.left.isDown)
          {
              this.body.velocity.x = -this.speed;
              move_animation = 'left'
          }
          if (this.arrow_keys.right.isDown)
          {
              this.body.velocity.x= this.speed;
              move_animation = 'right'
          }
          this.anims.play(move_animation, true);
    }
    
    set_upanimations(scene)
    {
        var idle = new Object();
        idle.key = 'idle';
        idle.frames = scene.anims.generateFrameNumbers('player',{start:0, end:0})
        scene.anims.create(idle);
        
        var left = new Object();
        left.key = 'left';
        left.frames = scene.anims.generateFrameNumbers('player',{start:3, end:4})
        left.frameRate = 6
        scene.anims.create(left);
        
        var right = new Object();
        right.key = 'right';
        right.frames = scene.anims.generateFrameNumbers('player',{start:1, end:2})
        right.frameRate = 6
        scene.anims.create(right);
    }
}