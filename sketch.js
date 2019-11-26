var width = 720;
var height = 400;
function setup() {
  createCanvas(720, 400);
  noStroke();
  background(230);
}

function draw() {

}

var myText = "";
var lastWord = "";
var lastChar = "";
var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'black', 'white'];
var currColor = 'black';
var textX = 10;
var textY = 10;

function keyPressed(){
  if ((key >= 'a' && key <= 'z') || key == ' '){
    if (lastChar == ' '){
      lastWord = "";
    }
    lastChar = key;
    if (key != ' '){
      lastWord += key;
      console.log(lastWord);
    }
    myText += key;
    text(myText, textX, textY);
    fill(currColor);
  }else if (key == 'Enter'){
    //check if the last word is a color
    if (colors.includes(lastWord)){
    // change color
      currColor = lastWord;
      lastWord = "";
      myText += " ";
    }
    nextLine();
    
  }else if (key == 'Backspace'){
    background(230);
    myText = "";
    lastWord = "";
    lastChar = "";
    textX = 10;
    textY = 10;
  }else if (key == '1'){
    textFont('Helvetica');
    nextLine();
  }else if (key == '2'){
    textFont('Georgia');
    nextLine();
  }else if (key == '3'){
    textFont('Impact');
    nextLine();
  }else if (key == '4'){
    textFont('Alconica');
    nextLine();
  }else if (key == '5'){
    textFont('Comic Sans MS');
    nextLine();
  }
}

function nextLine(){
  myText = "";
  lastWord = "";
  lastChar = "";
  textY += 12;
}

var centered = false;

function mouseClicked(){ 
  if (centered){
    myText = "";
    textX = 10;
    text(myText, textX, textY);
    fill(currColor);
    centered = false;
  }else{
    myText = "";
    textX = 360;
    text(myText, textX, textY);
    fill(currColor);
    centered = true;
  }
  }
//numbers change the font
//clicking centers the text
//type a color and hit enter changes the color
//enter on a regular word goes to the next line
