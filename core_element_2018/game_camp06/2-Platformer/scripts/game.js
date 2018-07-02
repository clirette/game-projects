var config = {
    type: Phaser.CANVAS,
    width: 32 * 20, 
    height: 32 * 16, 
    pixelArt: true,
    scene: [ Level1 ],
    physics: { default:'arcade' }
};

var game = new Phaser.Game(config);