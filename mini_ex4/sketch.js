var img;
function preload() {
  img = loadImage("https://rikkewolf.github.io/Mini_exercises/mini_ex4/assets/tree.png");
}
function setup() {
colorMode(HSB);
createCanvas(1250, 630); 
console.log("hello world");
background(0, 0, 12);
for (var i = 0; i < width; i+=200) {
image(img, i, 400, img.width/2.55, img.height/3); 
textSize(32);
text("Press A", 600, 200);
h = 360
}
}
function draw() {
}

function keyPressed() { 

if (keyCode == 65) {

fill(0, 0, 12);
noStroke()
rect(0, 0, width, 250);
fill(h, 100, 100);
textSize(32);
text("Standpoint", 50, 200);
textSize(24);
text("Press B", 50, 100);
}
if (keyCode == 66){
fill(0, 0, 12);
rect(0, 0, 150, 150);
fill(h, 100, 100);
text("Press C", 50, 100);
textSize(32);
text("New information", 250, 200);

}
if (keyCode == 67){
text("Reaktion", 520, 200);
fill(0, 0, 12);
rect(0, 0, 150, 150);
fill(h, 100, 100);
textSize(24);
text("Press D", 50, 100);

}
if (keyCode == 68){
fill(0, 0, 12);
rect(0, 0, 150, 150);
fill(h, 100, 100);
text("Press E", 50, 100);
textSize(32);
text("Reflection", 680, 200);
h = random(360);
}
if (keyCode == 69){
fill(h, 100, 100);
text("New standpoint", 900, 200);
fill(0, 0, 12);
rect(0, 0, 150, 150);
fill(h, 100, 100);
textSize(24);
text("Press A", 50, 100);
}

}




//if (h >= 360)  h=0;  else  h++;

//for (var i = 0; i < width; i+=80) {
//fill(h, 100, 100)
//rect(i, i, 80, 80)
//fill(0);
  