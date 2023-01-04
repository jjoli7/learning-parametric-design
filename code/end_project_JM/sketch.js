function preload(){
  // preload assets
  Milk = loadFont('Honeypirls-regular.ttf');
}

var Milk;


function setup() {
  createCanvas(750, 750);
  background(0);
  
  textFont(Milk);
  textSize(80);
  textAlign(CENTER, CENTER);
  
  
  
}


function draw() {

  
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){

    var x = i * 100 + 25
    var y = j * 100 + 25
    var d = 100
    var z = 100

    var r = map(i, 0, 7, 0, 255)
    var g = map(i, 0, 7, 255, 0)
    var b = map(j, 0, 7, 0, 255)
    
   
    strokeWeight(0.2);

    fill(r, g, b);
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(207, 7, 99);
    rect(x, y, d, z)
  }

  }
  
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = 'yellow';
  text('Saturday Night Fever', 360, 360);
  

}



