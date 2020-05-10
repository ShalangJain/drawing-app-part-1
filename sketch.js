function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
 
}
function mouseDragged(){
  strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
