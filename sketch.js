var mr, fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "yellow";
  mr.velocityX = -3;
  
  fr = createSprite(200, 200, 90, 50);
  fr.shapeColor = "yellow";
  fr.velocityX = 3;
}

function draw() {
  background("blue");  
  drawSprites();
  //mr.x = mouseX;
  //mr.y = mouseY;

  if (mr.x - fr.x <= mr.width/2 + fr.width/2 &&
    fr.x - mr.x <= fr.width/2 + mr.width/2) 
    /*mr.y - fr.y <= mr.height/2 + fr.height/2 &&
    fr.y - mr.y <= fr.height/2 + mr.height/2 */ {
    //mr.shapeColor = "pink";
    //fr.shapeColor = "pink";

    mr.velocityX = mr.velocityX * -1;
    fr.velocityX = fr.velocityX * -1;
  }

  /*else {
  mr.shapeColor = "yellow";
  fr.shapeColor = "yellow";
  }*/
}