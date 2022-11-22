function preload(){
  // preload assets
}


function setup() {
  createCanvas(400, 400);
  
}


function draw() {
background("#8595C2");


  
  

  
 

stroke(0);
  line(400, 400, 0, 0);
  line(0, 400, 400, 0);
  line(200, 0, 200 ,400);
  line(400, 200, 0, 200);

fill('#CB9BE7');
  beginShape();
  vertex(150, 150);
  vertex(250, 150);
  vertex(200, 100);
  endShape();

fill('#CEB0DF');
  beginShape();
  vertex(200, 300);
  vertex(150, 250);
  vertex(250, 250);
  endShape();

fill('#784992');
  beginShape();
  vertex(200, 150);
  vertex(250, 150);
  vertex(200, 100);
  endShape();
  
fill('#71289A');
  beginShape();
  vertex(200, 300);
  vertex(200, 250);
  vertex(250, 250);
  endShape();


fill('#7958BF');
  beginShape();
  vertex(150, 250);
  vertex(250, 250);
  vertex(200, 150);
  endShape();

fill('#C89DE1');
  beginShape();
  vertex(250, 150);
  vertex(250, 250);
  vertex(200, 150);
  endShape();

fill('#664C9B');
  beginShape();
  vertex(150, 150);
  vertex(150, 250);
  vertex(200, 150);
  endShape();

fill('#836E99');
  beginShape();
  vertex(150, 250);
  vertex(200, 250);
  vertex(175, 200);
  endShape();

fill('#3B1D5A');
  beginShape();
  vertex(200, 250);
  vertex(250, 250);
  vertex(225, 200);
  endShape();
}