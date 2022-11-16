
const sketchHeight = 400;
const sketchWidth = 400;

let boxWidth = 200;
let boxHeight = 200;
let fillcolor = fill(0);

function preload(){
  let back
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(0);

  fill (250)
  rect((sketchWidth - boxWidth) / 2, 
         (sketchHeight - boxHeight) / 2,
         boxWidth, boxHeight);
  fill(0);
  rect(125, 125, 150, 150);
  fill(250);
  rect(150, 150, 100, 100);
  fill(0);
  rect(175, 175, 50, 50);

  stroke(250);
  line(10, 10, 400, 400);
  

  let x = 1;
  while(x < 2) {
    let y = 1;
    while(y < 100) {
      line((1 * x) * 5, (1 * y) * 5, 400, 400);
      y += 1;
    }
    x += 1;
  }

  line(10, 400, 400, 10);

  

  
}