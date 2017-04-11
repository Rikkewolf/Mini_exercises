var api = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC"

var img;
function preload() {
  img = loadImage("https://rikkewolf.github.io/Mini_exercises/mini_ex9/map.png");

}

function setup() {
createCanvas(1300, 680);
background(img, 0, 0, 1300, 680);
console.log(mouseX, mouseY);

}

function draw() {
fill(255, 0, 0,);
ellipse(602, 40, 10, 10);
ellipse(115, 160, 10, 10);
ellipse(290, 350, 10, 10);
ellipse(675, 420, 10, 10);
ellipse(900, 220, 10, 10);
ellipse(1160, 160, 10, 10);
ellipse(1210, 430, 10, 10);

console.log(mouseX,mouseY);


}
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 602, 40);
  var e = dist(mouseX, mouseY, 115, 160);
  var f = dist(mouseX, mouseY, 290, 350);
  var g = dist(mouseX, mouseY, 675, 420);
  var h = dist(mouseX, mouseY, 900, 220);
  var i = dist(mouseX, mouseY, 1160, 160);
  var j = dist(mouseX, mouseY, 1210, 430);
  
  if (d < 15) {
  var url = api + "snow" + apiKey;
loadJSON(url, gotData);

  }else if (e < 15) {
var url = api + "desert" + apiKey;
loadJSON(url, gotData);

 }else if (f < 15) {
var url = api + "rainforest" + apiKey;
loadJSON(url, gotData);

 }else if (g < 15) {
var url = api + "waterfall" + apiKey;
loadJSON(url, gotData);

 }else if (h < 15) {
var url = api + "sunrise" + apiKey;
loadJSON(url, gotData);

 }else if (i < 15) {
var url = api + "cherry+blossom" + apiKey;
loadJSON(url, gotData);

}else if (j < 15) {
var url = api + "reef" + apiKey;
loadJSON(url, gotData);

  }else{
img1 = createImg("https://rikkewolf.github.io/Mini_exercises/mini_ex9/Screen%20Shot%202017-04-05%20at%2022.02.00.png");
img1.position(382, 295);
img1.size(278, 265);


}
function gotData(giphy) {
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
//fun fact: most numbers chosen by random are dicimal, can't use those for anything 
var i = random(numbers);  
img2 = createImg(giphy.data[i].images.original.url);
img2.position(400, 300);
img2.size(200, 200);

}
}



