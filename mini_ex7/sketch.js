var button;
var randombutton;
var input;

function setup() {
createCanvas(windowWidth, windowHeight);

button = createButton('Hello');
button.position(20, 20);
button.mousePressed(newbutton);

input = createInput("Please press buttons before answering, everything you do will be recorded and used for research on brainwashing");
input.position(20, 40);
input.size(600);

happycheckbox = createCheckbox('Are you happy?', false);
happycheckbox.position(20, 70);
happycheckbox.changed(newbutton);

sadcheckbox = createCheckbox('Are you sad?', false);
sadcheckbox.position(20, 90);
sadcheckbox.changed(newbutton);

scaredcheckbox = createCheckbox('Are you scared?', false);
scaredcheckbox.position(20, 110);
scaredcheckbox.changed(newbutton);

}

function newbutton() {
var words = [ "We are not far away", "Help me!", "Go away", "You've doomed us all", "You lost", 
"We all did", "Are you there", "I hate you", "We're coming for you", "No", "You should be", "Keep away", 
"Leave me alone!", "It's too much"];

var words1 = ["I like your smile", ":D", "Bouncy ball", "Hooray!", "I like pie", "Do you like unicorns?", "Me too!" ];

var words2 = ["Don't be!", "You are perfect!", "You are worthy!", "You are the best you", "I hope you'll feel better soon"];

var words3 = ["Hi", "Hello", "Nice to meet you", "Good day", "Press buttons please"];

if (happycheckbox.checked()) {
  var word = random(words1); 
  }   
else if (sadcheckbox.checked()) {
var word = random(words2);
}
else if (scaredcheckbox.checked()) {
var word = random(words);


} else {
var word = random(words3);
}
  
randombutton = createButton(word);
randombutton.position(random(100, 1200), random(130, 600));
randombutton.mousePressed(newbutton);
}







