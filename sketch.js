var width = 720;
var height = 400;
var startScreen = true;
var startText = "Hello! This is a typewriter webpage!\nChange the fonts using 1-5\nChange the color by typing the color name and hitting enter\n\tColors:\n\tRed, Green, Blue, Yellow, Orange, Black, White\nClick the page to type in the middle of the page, click again to go back but on the next line\nBackspace will clear your page and set the text back to black\nNow you know the commands, click to begin!";
function setup() {
  createCanvas(720, 400);
  noStroke();
  background(230);
  text(startText, 10, 10);
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
  if (!startScreen){
    if ((key >= 'a' && key <= 'z') || key == ' ' || key == ','){
      if (lastChar == ' '){
        lastWord = "";
      }
      lastChar = key;
      if (key != ' '){
        lastWord += key;
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
      currColor = 'black';
    }else if (key == '1'){
      textFont('Helvetica');
      nextLine();
    }else if (key == '2'){
      textFont('Georgia');
      nextLine();
    }else if (key == '3'){
      textFont('Times New Roman');
      nextLine();
    }else if (key == '4'){
      textFont('Alconica');
      nextLine();
    }else if (key == '5'){
      textFont('Comic Sans MS');
      nextLine();
    }
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
  if (startScreen){
    background(230);
    startScreen = false;
  }
  else{
    if (centered){
      myText = "";
      textX = 10;
      nextLine();
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
}
//numbers change the font
//clicking centers the text
//type a color and hit enter changes the color
//enter on a regular word goes to the next line
