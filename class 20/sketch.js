var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 100);
 fixedRect.shapeColor = "red";

 movingRect = createSprite( 200, 100, 100, 50);
 movingRect.shapeColor = "red";
}

function draw() {
  background("lightgreen"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  console.log(fixedRect.x - movingRect.x);
//         75                                 25      +     50
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&  
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "black";
    movingRect.shapeColor = "black";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}