var mBox,fBox;

function setup() {
  createCanvas(800,400);
  mBox = createSprite(400, 200, 50, 50);
  mBox.shapeColor="blue";
  fBox = createSprite(600,200,50,100);
  fBox.shapeColor="blue";
}

function draw() {
  background(25,255,255); 
  mBox.x=World.mouseX;
  mBox.y=World.mouseY;
  text(Math.round(mBox.x) +"  "+ Math.round(mBox.y), mBox.x-30,mBox.y-30);

if(mBox.x - fBox.x<fBox.width/2+mBox.width/2&&
  fBox.x -mBox.x<mBox.width/2+fBox.width/2&&
  mBox.y - fBox.y<fBox.height/2+mBox.height/2&&
  fBox.y -mBox.y<mBox.height/2+fBox.height/2
  ){
    mBox.shapeColor = "red";
    fBox.shapeColor = "red";
  }
  else{
    mBox.shapeColor = "blue";
    fBox.shapeColor = "blue";  
  }
  
  drawSprites();
}