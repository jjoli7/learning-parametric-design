




function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 500);
  background("#5C878F");
}

let angle = 0

function draw() {
  noFill();
  stroke(0)
  strokeWeight(2);

  
  fill("#D17827")
  beginShape();
  vertex(150, 450);
  vertex(350, 450);
  vertex(350, 350);
  vertex(20, 350);
  endShape();

strokeWeight(2);
beginShape();
vertex(20, 350); 
bezierVertex(20, 350, 20, 450, 150, 450);
endShape();
//outer shapes


beginShape();
  vertex(350, 150);
  vertex(20, 150);
  vertex(20, 50);
  vertex(250, 50);
  endShape();
  
  strokeWeight(2);
  beginShape();
  vertex(250, 50); 
  bezierVertex(350, 50, 350,150, 350, 150);
  endShape();

  //inner shapes 
  
  fill("green")
  rect(150, 160, 200, 100);
  
  fill("#61340B")
  rect( 20, 280, 100, 60);
  rect(150, 280, 200, 60);

  
  circle(260,210,10,100)
  
  fill("red")
  
  translate (1, -1);
  let radius = 100 
   if (mouseIsPressed === true){
   radius = 200;

  
   }
   translate( mouseX, mouseY);
  circle(70, 210, 100, 100);

  
  translate (1, -1);
  if (mouseIsPressed === true){
    rotate(Math.PI / 180 * angle);
  angle += 1

  
   }
  
  fill("green")
  rect(150, 160, 200, 100);
  
  
  
  
  
  
  
}
 
  


  
