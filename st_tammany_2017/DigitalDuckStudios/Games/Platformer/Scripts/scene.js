var scene = new Scene();

function Scene()
{
  this.hazards = new Array();
  this.blocks = new Array(); //#new
  this.height = null;
  this.width = null;
  this.image = new Image ()
  this.image.src = "Assets/DigitalStudiosbackground.png"

  this.draw = function()
  {
   renderer.ctx.drawImage(this.image,0,0,this.width*32, this.height*32)
   this.blocks.forEach((block) => block.draw() ); 
   this.hazards.forEach( (hazard) =>  hazard.draw() );
   exit.draw();
  
    
  };

  this.setScene = function(wordData)
  {
  this.width = wordData[0].length;
  this.height = wordData.length;
  
  for (var y=0; y<this.height; y++)
  {
    var textRow = wordData[y]
    for (var x=0; x<this.width; x++)
    {
      var tileID = textRow[x]
      if (tileID == "#" )
      {
        var blockx = x * 32;
        var blocky = y * 32;
        var blockw = 32;
        var blockh = 32;
        var block = new Block(blockx, blocky, blockw, blockh);
        this.blocks.push(block); 
      }
      else if (tileID == '@')
      {
        player.x = x*32;
        player.y = y*32;
      }
      else if (tileID == '!')
      {
        exit.x = x*32
        exit.y = y*32
      }
       else if  (tileID == 'A')
       {
        var hazard = new FloorHazard();
        hazard.x = x * 32;
        hazard.y = y * 32;
        this.hazards.push(hazard);
       }
      else if (tileID  == 'V')
      {
        var hazard = new CeilingHazard();
        hazard.x = x * 32;
        hazard.y = y * 32;
        this.hazards.push(hazard);
      }
    }
    
    
    
  }
  
  
  var blockx = 0;
  var blocky = 400;
  var blockw = 32;
  var blockh = 32;
  var block = new Block(blockx, blocky, blockw, blockh);
  this.blocks.push(block);  
  };
};