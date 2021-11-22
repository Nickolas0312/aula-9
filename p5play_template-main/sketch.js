var bola
function setup() {
  createCanvas(400,400);
  bola = createSprite(200,200,10,10);
}

function draw() 
{
  background(30);
  drawSprites();
   if (keyDown(RIGHT_ARROW)){
     bola.x = bola.x + 2;
   }

if (keyDown(LEFT_ARROW)){
  bola.x = bola.x - 2;
}

if(keyDown(DOWN_ARROW)){
bola.y = bola.y + 2;
}

if(keyDown(UP_ARROW)){
  bola.y = bola.y - 2;
}

}




