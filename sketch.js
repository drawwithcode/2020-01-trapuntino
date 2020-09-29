function preload(){
  // put preload code here
}

function setup() {
createCanvas(750,750);
background("black");
frameRate(12);
  // put setup code here
}

function draw() {
noStroke();
fill(lerpColor(color("#3d348b"), color("#c71f37"),
frameCount/120));
rect(mouseX, mouseY, 60, 100, 40);
  // put drawing code here
}
