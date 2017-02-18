function setup() {
createCanvas(800, 800); 
console.log("hello world");
r = random(255);
g = random(255);
b = random(255);
}

function draw() {
console.log(mouseX,mouseY); //shows where the mouse is on the sketch, makes it easier to find coordinates

background(r, g, b);
r = random(255)
g = random (255)
b = random (255)
fill(r, g, b);
noStroke();
rect(0, 0, 80, 80);
rect(80, 80, 80, 80);
rect(160, 0, 80, 80);
rect(240, 80, 80, 80);
rect(320, 0, 80, 80);
rect(400, 80, 80, 80);
rect(480, 0, 80, 80);
rect(560, 80, 80, 80);
rect(640, 0, 80, 80);
rect(720, 80, 80, 80);
rect(800, 0, 80, 80);

rect(0, 160, 80, 80);
rect(80, 240, 80, 80);
rect(160, 160, 80, 80);
rect(240, 240, 80, 80);
rect(320, 160, 80, 80);
rect(400, 240, 80, 80);
rect(480, 160, 80, 80);
rect(560, 240, 80, 80);
rect(640, 160, 80, 80);
rect(720, 240, 80, 80);
rect(800, 160, 80, 80);

rect(0, 320, 80, 80);
rect(80, 400, 80, 80);
rect(160, 320, 80, 80);
rect(240, 400, 80, 80);
rect(320, 320, 80, 80);
rect(400, 400, 80, 80);
rect(480, 320, 80, 80);
rect(560, 400, 80, 80);
rect(640, 320, 80, 80);
rect(720, 400, 80, 80);
rect(800, 320, 80, 80);

rect(0, 480, 80, 80);
rect(80, 560, 80, 80);
rect(160, 480, 80, 80);
rect(240, 560, 80, 80);
rect(320, 480, 80, 80);
rect(400, 560, 80, 80);
rect(480, 480, 80, 80);
rect(560, 560, 80, 80);
rect(640, 480, 80, 80);
rect(720, 560, 80, 80);
rect(800, 480, 80, 80);

rect(0, 640, 80, 80);
rect(80, 720, 80, 80);
rect(160, 640, 80, 80);
rect(240, 720, 80, 80);
rect(320, 640, 80, 80);
rect(400, 720, 80, 80);
rect(480, 640, 80, 80);
rect(560, 720, 80, 80);
rect(640, 640, 80, 80);
rect(720, 720, 80, 80);
rect(800, 640, 80, 80);

stroke(255, 0, 0); //makes border of the following shapes red
fill(255, 0, 0); // fill the following shapes red
triangle(400, 30, 150, 400, 650, 400); // findes der en måde at lave en koordinatsystem grid så jeg kan se hva fanden jeg laver? - fixed
stroke(255, 255, 255); // makes the border of the following shapes white
fill(255, 255, 255); // makes the following shapes white
triangle(400, 100, 220, 360, 580, 360); // det tog en del trial and error at få koordinaterne til at passe, der må være en nemmere måde- fixed
stroke(0, 0, 0); //sets the border of the following shapes to black
ellipse(350, 200, 40, 40); //white part of eye 1
ellipse(450, 200, 40, 40); //white part of eye 2
fill(r, g, b); 
ellipse(350, 200, 15, 15); // pupil 1
ellipse(450, 200, 15, 15); // pupil 2
fill(0, 0, 0); //fill following black
triangle(400, 270, 350, 340, 450, 340); //mouth
line(333, 160, 376, 190);
line(467, 160, 424, 190);
}

