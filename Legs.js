var img;

function preload(){
  img = loadImage('Leg.png');
}

function setup(){
  createCanvas(600, 600);
  background(100);
}

function mousePressed(){
  image(img ,mouseX-50,mouseY-10,img.width/2,img.height/2);
}
