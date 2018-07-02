var config = new Object();

config.width =  32 * 24;
config.height = 32 * 16;
config.scene = [ Level1, Level2 ];
config.physics = {default:'arcade'};
config.type = Phaser.CANVAS;
config.pixelArt = true;

var game = new Phaser.Game(config);