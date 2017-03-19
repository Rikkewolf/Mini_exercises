var r = 0;
var status = "up";
var r1 = 0;
var status1 = "up";
var r2 = 0;
var status2 = "up";
var t = 0;
var statust = "up";



function setup() {
 createCanvas(windowWidth, windowHeight);   
 noFill();


}

function draw() {
var s = random(3);
if (r > 10) {
stroke(0);
strokeWeight(s);
}
background(255, 255, 255, 255);




ellipse(width/2, height/2, 50*r, 50*r);
ellipse(width/2, height/2, 100*r1, 100*r1);
ellipse(width/2, height/2, 50*r2, 50*r2);
  
recTangels(1);
recTangels2(1);
recTangels3(1);
recTangels4(1); 
cirKels(1);
cirKels1(1);
triAngles(1);

  if (status == "up") {
  	r+=0.07; 
  }else{
  	r-=0.07;
}

  if (status1 == "up") {
  	r1+=0.05; 
  }else{
  	r1-=0.05;
}
  if (status2 == "up") {
  	r2+=0.02; 
  }else{
  	r2-=0.02;
}
  if (statust == "up") {
  	t+=0.03; 
  }else{
  	t-=0.03;
}
  if (r > 11){    
   status = "down";
  }else if (r < 4) {
   status = "up";
  }
   if (r1 > 6){    
   status1 = "down";
  }else if (r1 < 1) {
   status1 = "up";
  } 
    if (r2 > 11){    
   status2 = "down";
  }else if (r2 < 4) {
   status2 = "up";
  } 
      if (t > 11){    
   statust = "down";
  }else if (t < 4) {
   statust = "up";
  } 
  
}
 
function recTangels(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/400*(frameCount%400);  
  rotate(radians(cir));
  rect(0, 0, 50*r1, 50*r1); 
  rect(0, 0, -50*r1, -50*r1); 
  rect(0, 0, -50*r1, 50*r1);
  rect(0, 0, 50*r1, -50*r1);
  pop();

}

function recTangels2(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/200*(frameCount%200);  
  rotate(radians(cir));
  rect(0, 0, 40*r1, 40*r1); 
  rect(0, 0, -40*r1, -40*r1); 
  pop();

}

function recTangels3(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/100*(frameCount%100);  
  rotate(radians(cir));
  rect(0, 0, 15*r2, 15*r2); 
  rect(0, 0, -15*r2, -15*r2); 
  pop();

}

function recTangels4(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/75*(frameCount%75);  
  rotate(radians(cir));
  rect(20, 20, 20*r2, 20*r2); 
  rect(-20, -20, -20*r2, -20*r2); 
  pop();

}

function cirKels(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/300*(frameCount%300);  
  rotate(radians(cir));
 ellipse(50*r1, 0, 6*r2, 6*r2);
 ellipse(-50*r1, 0, 6*r2, 6*r2);
  ellipse(0, 50*r1, 6*r2, 6*r2);
 ellipse(0, -50*r1, 6*r2, 6*r2);
  pop();

}

function cirKels1(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/200*(frameCount%200);  
  rotate(radians(cir));
 ellipse(50*r1, 0, 20*r2, 20*r2);
 ellipse(-50*r1, 0, 20*r2, 20*r2);
  ellipse(0, 50*r1, 20*r2, 20*r2);
 ellipse(0, -50*r1, 20*r2, 20*r2);
  pop();

}

function triAngles(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/500*(frameCount%500);  
  rotate(radians(cir));
triangle(200, 200, 20*t, 0*t, 0*t, 20*t);
triangle(200, 200, -20*t, -0*t, -0*t, -20*t); 
triangle(-200, -200, 20*t, 0*t, 0*t, 20*t);
triangle(-200, -200, -20*t, -0*t, -0*t, -20*t);

  pop();

}
