/*
Jacob Martin
Online typewriter
This program is intended to give you a taste of what using a typewriter is like! However, there are some added quirks such as using colors.
The user is first prompted with the start screen listing all of their possible changes. They can type, change the font, change the color,
type in the center of the line, and most importantly scrap the whole piece because you messed up! keyTyped will handle all of the user input
characters and print them to the screen. keyPressed will handle the user pressing the enter key(new line or change color), backspace, and when
the user types a number for font. nextLine is used to put the text on the next line so you can keep the code DRY. mouseClicked will put the 
text in the center of the line and put it back on the next line when clicked again.
*/
//canvas size
var newWidth;
var newHeight;
//initialize start screen
var startScreen = true;
//start screen text
var startText = "Hello! This is a typewriter webpage!\nChange the fonts using 1-5\nChange the color by typing the color name and hitting enter\n\tColor commands:\n\tred, green, blue, yellow, orange, black, white\nClick the page to type in the middle of the page, click again to go back but on the next line\nBackspace will clear your page and set the text back to black\nNow you know the commands, click to begin!";
//sets up the canvas for the user to type on 
function setup() {
  //capture the size of the window
  newWidth = windowWidth;
  newHeight = windowHeight;
  //put canvas on the screen
  createCanvas(newWidth, newHeight);
  noStroke();
  //set background
  background(230);
  //put start text on the canvas
  text(startText, 10, 10);
}

function draw() {
  //loops to fetch input
}

//initial words type are empty along with characters
var myText = "";
var lastWord = "";
var lastChar = "";
//all the colors the user can use
var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'black', 'white'];
//first color to use
var currColor = 'black';
//where to put the text at initially
var textX = 10;
var textY = 10;

function keyTyped(){
  //if the startscreen is not up
  if(!startScreen){
    //if the user types a-z, A-Z, a space, commad or period
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ' || key == ',' || key == '.'){
      //spaces mean new word
      if (lastChar == ' '){
        //now the last word is empty because there is a space
        lastWord = "";
      }
      //track the last key pressed
      lastChar = key;
      //spaces are not part of words
      if (key != ' '){
        //add the key to the last word
        lastWord += key;
      }
      //adds to the text with new character
      myText += key;
      //prints text to scree now
      text(myText, textX, textY);
      //make sure the color is correct for the text
      fill(currColor);
    }
  }
}

function keyPressed(){
  //not on startscreen
  if (!startScreen){
    if (key == 'Enter'){
      //check if the last word is a color
      if (colors.includes(lastWord)){
      // change color
        currColor = lastWord;
        lastWord = "";
        myText += " ";
      }
      nextLine();//go to next line
      
    }else if (key == 'Backspace'){//user presses backspace
      background(230);//fill background
      //clear the text because there is no more text
      myText = "";
      lastWord = "";
      lastChar = "";
      //initial position
      textX = 10;
      textY = 10;
      //restore color of text
      currColor = 'black';
    }//for keys 1-5 change the font accordingly 
    else if (key == '1'){
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
//used to put the text on the next line 
function nextLine(){
  myText = "";
  lastWord = "";
  lastChar = "";
  textY += 13;
}

var centered = false;//text is not originally centered

function mouseClicked(){ 
  //start screen will be cleared on first click
  if (startScreen){
    background(230);
    startScreen = false;
  }//not startscreen so center the text or align back on the left side
  else{
    if (centered){//align to the left
      myText = "";
      textX = 10;
      nextLine();
      text(myText, textX, textY);
      fill(currColor);
      centered = false;
    }else{//align to the center
      myText = "";
      textX = (newWidth / 2);
      text(myText, textX, textY);
      fill(currColor);
      centered = true;
    }
  }
}
