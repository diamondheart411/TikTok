//Creates a digital as well as an analog clock

//variables for the background and respective times
var backgr;
var hor, min, sec;

//loads the background image
function preload() {
  backgr = loadImage("bg.jpg");
}

function setup() {
  //draws the canvas
  createCanvas(600, 600);

  //sets tha angle mode to degrees
  angleMode(DEGREES);
}

function draw() {
  //applys the image to the background
  background(backgr);  
 
  //assigns the variables the times using in-built p5 functions
  hor = hour();
  min = minute();
  sec = second();

  //fills the white color
  fill(255);
  //sets the text size to 30
  textSize(30);
  //displays the digital clock
  text(hor % 12 + " : " + min + " : " + sec, 230, 50);

  //sets the text size to 10
  textSize(10);
  //specifies the hour, minute and second for the digital clock
  text("Hour", 228, 23);
  text("Min", 280, 23);
  text("Sec", 333, 23);

  //sets the text size to 15
  textSize(15);

  //displays AM or PM according to the hour
  if(hor <= 12){
    text("AM", 375, 45);
  }else {
    text("PM", 370, 45);
  }

  //sets the text size to 25
  textSize(25);
  //displays the numbers for the analog clock
  text("12", 280, 200);
  text("3", 400, 305);
  text("6", 280, 410);
  text("9", 180, 305);

  //sets the text size to 15
  textSize(15);
  //fills the specified color
  fill(250, 250, 20);
  //creates a square for the legend
  rect(500, 510, 15, 15);
  //fills the white color
  fill(255);
  //displays the text of the legend
  text("Hours", 525, 523);

  //same as above
  fill(0, 150, 140);
  rect(500, 535, 15, 15);
  fill(255);
  text("Minutes", 525, 548);

  //same as above
  fill(260, 50, 140);
  rect(500, 560, 15, 15);
  fill(255);
  text("Seconds", 523, 573);

  //translates to the specified size
  translate(300, 300);
  //rotates to -90 degree
  rotate(-90);

  //sets the stroke weight to 7
  strokeWeight(7);
  //gives the stroke color
  stroke(260, 50, 140);
  //does not fill any color
  noFill();

  //creates variable for seconds and draws its arc
  var secs = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secs);

  //gives the stroke color
  stroke(0, 150, 140);
  //creates variable for minutes and draws its arc
  var mins = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mins);

  //gives the stroke color
  stroke(250, 250, 20);
  //creates variable for hours and draws its arc
  var hours = map(hor % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hours);

  //sets the push command to change the settings
  push();
  //rotates the arc according to its unit time
  rotate(secs);
  //set sthe stroke weight to 3
  strokeWeight(3);
  //sets the stroke color accordingly
  stroke(260, 50, 140);
  //creates a line representing the hand of the clock
  line(0, 0, 118, 0);
  //sets the pop command t reset the settings
  pop();

  //sets the push command to change the settings
  push();
  //rotates the arc according to its unit time
  rotate(mins);
  //set sthe stroke weight to 5
  strokeWeight(5);
  //sets the stroke color accordingly
  stroke(0, 150, 140);
  //creates a line representing the hand of the clock
  line(0, 0, 60, 0);
  //sets the pop command t reset the settings
  pop();

  //sets the push command to change the settings
  push();
  //rotates the arc according to its unit time
  rotate(hours);
  //set sthe stroke weight to 7
  strokeWeight(7);
  //sets the stroke color accordingly
  stroke(250, 250, 20);
  //creates a line representing the hand of the clock
  line(0, 0, 100, 0);
  //sets the pop command t reset the settings
  pop();

  //sets the color to cyan
  stroke("cyan");
  //creates a point as the center of the clock from which all the hands come out
  point(0, 0);


}