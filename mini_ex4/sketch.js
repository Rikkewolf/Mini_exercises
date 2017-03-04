var img;
function preload() {
  img = loadImage("assets/tree.png");
}
function setup() {
createCanvas(1280, 630); 
console.log("hello world");
background(25);
for (var i = 0; i < width; i+=56) {
image(img, 50, 50); 
fill(0);
}
}
function draw() {
colorMode(HSB);
h = random(360);


}

function keyPressed() { 
if (keyCode == 65) {
fill(0);
//rect(0, 0, width, height);
fill(h, 100, 100);
textSize(32);
text("Standpoint", 540, 100);
}
if (keyCode == 66){
text("New information", 680, 315);
}
if (keyCode == 67){
text("Reaktion", 540, 530);
}
if (keyCode == 68){
text("Reflection", 350, 315);
}
}

function keyTyped() {
if (key == 'k') {
fill(255);
text("you typed key!", 20, 30);
}
}




//if (h >= 360)  h=0;  else  h++;

//for (var i = 0; i < width; i+=80) {
//fill(h, 100, 100)
//rect(i, i, 80, 80)
//fill(0);
  