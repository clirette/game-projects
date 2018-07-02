var scene = new Scene();

function Scene()
{
  this.hazards = new Array();
  this.blocks = new Array(); //#new
  this.height = null;
  this.width = null;

  this.draw = function()
  {
  
    this.blocks.forEach( (block) => block.draw());
    this.hazards.forEach( (hazard) => hazard.draw());
    exit.draw();
    
  };
 
  this.setScene = function(worldData)
  {
    this.height = worldData.length;
    this.width = worldData[0].length;
    
    for(var j = 0; j<this.height; j++) {
    
      var textRow = worldData[j];
    
      for (var i = 0; i <this.width; i++) {
        
        var tileID = textRow[i];
        if (tileID == "#"){
        
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Block(x, y, w, h, "Assets/Blocks/PlayerPossum_Grass.png");
          this.blocks.push(block);
        } 
        
          else if (tileID == "@") {
            player.x = i*32;
            player.y = j*32;
          }
          
          else if (tileID == "!") {
            exit.x = i*32;
            exit.y = j*32;
          }
          
           else if (tileID == "A") {
            var hazard = new FloorHazard();
            hazard.x = i*32;
            hazard.y = j*32;
            this.hazards.push(hazard);
          }
          
          else if (tileID == "V") {
            var hazard = new CeilingHazard();
            hazard.x = i*32;
            hazard.y = j*32;
            this.hazards.push(hazard);
          }
          
          else if (tileID == "J"){
        
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Block(x, y, w, h, "Assets/Blocks/PlayerPossum_Dirt.png");
          this.blocks.push(block);
        } 
        
          else if (tileID == "B") {
          var x = i*32;
          var y = j*32;
          var w = 32;
          var h = 32;
          var block = new Block(x, y, w, h, "Assets/Blocks/PlayerPossumBricks.png");
          this.blocks.push(block);
          }
          
          else if (tileID == "L") {
            var hazard = new FullHazard("Assets/Blocks/Lava/PlayerPossumLava.png");
            hazard.x = i*32;
            hazard.y = j*32;
            this.hazards.push(hazard);
          }
          
          else if (tileID == "?") {
            var hazard = new FullHazard("Assets/Blocks/Lava/PlayerPossumLava Bottom.png");
            hazard.x = i*32;
            hazard.y = j*32;
            this.hazards.push(hazard);
          }
          
          
      }
      
    }
  };
};