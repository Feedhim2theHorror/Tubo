//The setup function only happens once

var tubo=55;

function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas fill(255, 250, 246 );
  
}

//The draw function happens over and over again
function draw() {
 
  background(tubo,75, 250); //an RGB color for the canvas' background
  //circle
  stroke(153, 126, 86) // an RGB color for the circle's border
  strokeWeight(3)
  fill(tubo, 164, 66 ,250); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,tubo,tubo); // center of canvas, 20px dia
  stroke (255, 250, 246 )
  fill(255, 250, 246 ); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(width),2,2); // center of canvas, 20px dia
}

function mousePressed(){
  if (tubo>350){
    tubo=50;
  }else{
    tubo=tubo+15
  }
  
} 