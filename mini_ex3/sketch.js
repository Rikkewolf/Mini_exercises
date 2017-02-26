
var value = 0
function setup() {
createCanvas(800, 600); 
console.log("hello world");
background(10);
frameRate(10);
r = color(255)
g = color(255)
b = color(255)

}

function draw() {

//fill(10, 80);
//rect(0, 0, width, height);

push();
translate(width/2, height/2);
var cir = 360/8*(frameCount%8);
rotate(radians(cir));
noStroke();
fill (value);
triangle(0, 0, 30, 0, 30, 30);
pop();

}

function mouseMoved() {
value = value + 5;

if (value > 255) {
value = 0;
}
}