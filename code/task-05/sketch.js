function preload(){
  // preload assets
  img = loadImage ("heart.png");
}


var img
posX = 0;
posY = 0;
pos1X = 0;
pos1Y = 150;
pos2X = 0;
pos2Y = 75;
pos3X = 0
pos3Y = 0

let height = 400;
let width = 400;

let angle = 0;


function setup() {
  createCanvas(400, 400);
  
  imageMode(CENTER);

  angleMode (DEGREES);

  
  
  
  
}



function draw() {
  background("0");
  
  
  fill("#A5F9F6");
  strokeWeight(3);

  circle(200, 200, 400, 300);
  

  fill("black");
  textSize(30);
  text("12", 185, 50);
  text("6", 185, 380);
  text("9", 30, 200);
  text("3", 350, 200);
  
  strokeWeight(0);
// heart 1
  push();
  translate(200, 200);
  rotate(angle);
  angleMode (DEGREES);
  imageMode(CENTER);
  image(img, posX, posY, 50, 50);
  angle++;
  pop();
// heart 2
  push();
  translate(200, 200);
  rotate(angle);
  angleMode (DEGREES / 2);
  imageMode(CENTER);
  image(img, pos1X, pos1Y, 50, 50);
  angle++;
  
  pop();

// rect
  fill("#FDABAB");
  push();
  translate(200, 200);
  rotate(angle);
  angleMode (DEGREES / 2);
  rectMode(CENTER);
  rect( pos2X, pos2Y, 2, 80);
  angle++;
  pop();

  


}
