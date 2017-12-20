var userSeq = []; //stores user sequence needed to compare the game startSequence
var gameSeq = []; //sequence of the game for user to duplicate
var lvlNum = 10;
var id;
var color;
var level = 0;
var start = document.getElementById("start");
var levelCounter = document.getElementById("level-number");
var box = document.getElementsByClassName("box");

start.addEventListener("click", startGame);
function startGame() {
  level++; //increases level by one each time start is pressed;
  startSequence();
}

for (var i = 0; i <box.length; i++) {
  box[i].addEventListener("click", userSequence);
}
function userSequence() {
  id = this.getAttribute("id"); //upon clicking, set var id to the id of whatever box you are clicking
  color = this.getAttribute("class").split(" ")[0]; //upon clicking, set var color to the class color name of the box you are clicking
  var boxColor = this.getAttribute("class").split(" ")[1]; //tell the console what box color you are clicking
  userSeq.push(id); //each time you click on a box, add that box id number to the array userSeq
  addClass(id, color);
  if(!checkUserSeq()) { //check user sequence
    displayError();
    userSeq = [];
  }
  if((userSeq.length == gameSeq.length) && (userSeq.length < lvlNum)) { //check end of sequence
    level++;
    userSeq = [];
    startSequence();
  }
  if (userSeq.length == lvlNum) {
    levelCounter.textContent = "WIN!"
  }
  console.log(id + " " + color + " " + boxColor + " " + userSeq);
}

function checkUserSeq() {
  for (var i = 0; i < userSeq.length; i++) {
    if (userSeq[i] != gameSeq[i]) {
      return false;
    }
  }
  return true;
}

function displayError() { //display error if wrong sequence is entered
  console.log("error");
  var counter = 0;
  var myError = setInterval(function(){
    levelCounter.textContent = "error";
    counter++;
    if(counter == 3) {
      levelCounter.textContent = level;
      clearInterval(myError);
      userSeq = [];
      counter = 0;
    }
  }, 500);
}

function startSequence() {
  console.log(level);
  levelCounter.textContent = level; //displays level
  getRandNum();
  var i = 0; //set a blank variable equal to 0;
  var int = setInterval(function(){ //loop for displaying random colors in a sequence
    id = gameSeq[i]; //select a box in the sequence
    color = document.getElementById(id).getAttribute("class").split(" ")[1]; //set var color to the box selected above, return the second class in the HTML information
    console.log(id + " " + color);
    addClass(id, color);
    i++; //increment i by 1 each second
    if(i === gameSeq.length) {
      clearInterval(int);
    }
  }, 1000); //each second

}

function getRandNum() {
  var random = Math.floor(Math.random() * 4); //generate a random number between 0 and 1 NOT INCLUDING 1, multiply by 4 to get a random number between 0 and 4 NOT INCLUDING 4
  gameSeq.push(random); //Push random number to gameSeq array created at the top
}

function addClass(id, color) { //add a temprorary class (make the box flash)
  document.getElementById(id).classList.add(color+ "-active"); //get the class of the id depending on the randomly generated number and apply the bright-color class to it, making it flash
  setTimeout(function() {
    document.getElementById(id).classList.remove(color+ "-active");
  }, 500);
}
