function preload(){
  // preload assets
}

function setup() {
  createCanvas(400,400);
  background(0);
  
}

function draw() {

  fill("white")
  
  for (var x = 50; x <=width; x += 100) {
    for (var y = 50; y <= height; y += 100){

      
      rect(x, y, 50, 50)


    }
  }
  for (var i = 0; i <= width; i += 100){
    for (var j = 0; j <= height; j += 100) {
    rect(i, j , 50, 50);
    }
}
}



