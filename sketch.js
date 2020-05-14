var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
 }else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
 }

 
  drawSprites();
}
