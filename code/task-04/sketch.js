function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
  
}
const radius = 100;

function draw() {
  background("#8595C2");
  translate(200, 200);

  for (let angle = 0; angle < 360; angle += 15) {
    push();
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    
    strokeWeight(10)
    translate(x, y);
    line(10, 10, 10, 10);

    // returning to the initial translate
    pop();
  }

  noLoop(); 
}
 
  


  
