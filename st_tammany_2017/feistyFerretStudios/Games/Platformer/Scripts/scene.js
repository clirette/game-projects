var scene = new Scene();

function Scene()
{
  this.hazards = new Array();
  this.blocks = new Array(); //#new
  this.height = null;
  this.width = null;
  this.image = new Image();
  this.image.src= "Assets/FiestyFerretBackground.png";

  this.draw = function()
  {
    renderer.ctx.drawImage(this.image,0,0,this.width*32,this.height*32);
    this.blocks.forEach ((block) => block.draw() );
    this.hazards.forEach((hazard)=>hazard.draw());
    exit.draw();
  };

  this.setScene = function(worldData)
  {
    this.width=worldData[0].length;
    this.height=worldData.length;
    
    for (var y=0; y<this.height; y++)
    {
      var textRow = worldData[y]
      for (var x=0; x<this.height; x++)
      {
        var titleID = textRow[x];
        if (titleID =="#")
        {
          var blockx = x*32;
          var blocky = y*32;
          var blockh= 32;
          var blockw= 32;
          var block=new Block(blockx,blocky,blockh,blockw);
          this.blocks.push(block);
        }
        else if(titleID =="@")
        {
          player.x=x*32;
          player.y=y*32;
        }
        else if (titleID =="!")
        {
          exit.x=x*32
          exit.y=y*32
        }
        else if (titleID == "A")
        {
          var hazard = new FloorHazard();
          hazard.x=x*32;
          hazard.y=y*32;
          this.hazards.push(hazard);
        }  
        else if (titleID=="V")
        {
          var hazard = new CeilingHazard();
          hazard.x=x*32;
          hazard.y=y*32;
          this.hazards.push(hazard);
        }
      }
    }
  };
};