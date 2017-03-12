var indput;
var button;
var lexicon;

function setup() {
noCanvas();
lexicon = new RiLexicon ();

input = createInput("I give up!! I can't get anything to work. I have spent 10+ hours on this crap and I still only barely got the sample code to work");
button = createButton('F*ck this');
input.changed(processRita);
button.mousePressed(processRita);
input.size(1000);
}

function processRita() {
var s = input.value();
var rs = new RiString(s);
var words = rs. words();
var pos = rs.pos();

console.log (words);


var output = '';
for(var i = 0; i < words.length; i++) { 

if (/nn.*/.test(pos[i])) {
output += lexicon.randomWord(pos[i]);

} else { 
output += words[i];
}
output += " ";
}
createP(output);
}

