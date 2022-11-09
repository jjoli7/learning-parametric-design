function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#AA7DD3") ;

  
  fill('#9880AD')
  circle(200, 175, 300, 300);
  strokeWeight(10);

  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * 0,
    Math.PI / 180 * 80,
    OPEN
  );
  fill(255)
  strokeWeight(10);

  arc(
    200, 200,
    150, 200,
    Math.PI / 180 * 0,
    Math.PI / 180 * 80,
    OPEN
  );

  strokeWeight(10);

  arc(
    200, 200,
    100, 200,
    Math.PI / 180 * 0,
    Math.PI / 180 * 90,
    OPEN
  );

  strokeWeight(10);

  arc(
    200, 200,
    50, 200,
    Math.PI / 180 * 0,
    Math.PI / 180 * 90,
    OPEN
  );
  
  line(200, 200, 200, 300 );
  
  arc(
    200, 200,
    50, 50,
    Math.PI / 180 * 90,
    Math.PI / 180 * 180,
    OPEN
  );
  
  arc(
    200, 200,
    100, 100,
    Math.PI / 180 * 90, 
    Math.PI / 180 * 180,
    OPEN
  );

  arc(
    200, 200,
    150, 150,
    Math.PI / 180 * 90, 
    Math.PI / 180 * 180,
    OPEN
  );

  arc(
    200, 200,
    200, 200,
    Math.PI / 180 * 90, 
    Math.PI / 180 * 180,
    OPEN
  );
  
  
  fill('#753FA5')
  circle( 200, 150, 100, 100);
  fill('#471574')
  circle( 120, 150, 50, 50);
  circle( 280, 150, 50, 50);
  circle(140, 92, 50, 50);
  circle(260, 92, 50, 50);
  circle(200, 70, 50, 50);
  

 
}
