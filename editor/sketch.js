let currentY = 0;

function setup() {
 
  createCanvas(384, 500); 
  background(255); 
}

function draw() {

  if (currentY >= height) {
    noLoop(); 
    return;
  }

  stroke(0); 
  strokeWeight(1.5);
  
  let x = 0;
  
  
  while (x < width) {
    let nextX = x + random(5, 20);
    let yOffset = random(-15, 15);
    
  
    line(x, currentY, nextX, currentY + yOffset);
    
    x = nextX;
  }
  
  currentY += 4;
}
