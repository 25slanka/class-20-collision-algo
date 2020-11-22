var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor=255;
  fixedRect.debug=true;
  movingRect=createSprite(200, 200, 30, 30);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;
}

function draw() {
  background("blue"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
movingRect.shapeColor="red";
fixedRect.shapeColor="red";
}
else 
{
  movingRect.shapeColor="yellow";
fixedRect.shapeColor=255;
}


  drawSprites();
}