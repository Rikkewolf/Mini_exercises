function preload() {
longstring = loadStrings("assets/Test.txt");
}

function setup() {
createCanvas(800, 600); 
console.log("hello world");
background(0);
}

//function draw() {

//}

function loadlongstring() {
for (var i = 0; i <longstring.length; i++) {
getlongstring = getlongstring + longstring[i];
}
}

function displaychar() {
var lengthcount = getlongstring.length;
var one = getlongstring.charAt(getindex);
getindex++;
if (getindex == lengthcount) {
getindex = 0;
}
}

	
//replaceWord(wordIdx, newWord);