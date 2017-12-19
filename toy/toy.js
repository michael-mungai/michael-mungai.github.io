//variables
userSeq = [];
gameSeq = [0,1,2];
var id = 0;
var color = 0;
var level = 0;
var startButton = document.getElementById("start");
var levelDisplay = document.getElementById("level-number");
var box = document.getElementsByClassName("box");

startButton.addEventListener("click", startGame);
function startGame() {
  level++;
  startSequence();
}

for (var j = 0; j < box.length; j++) {
  box[j].addEventListener("click", userBox);
}

function userBox() {
  id = this.getAttribute("id");
  color = this.getAttribute("class").split(" ")[0];
  userSeq.push(id);
  console.log(id + " " + color);
  addClass(id, color);
  //check user startSequence
  if (!checkUserSeq()) {
    displayError();
    useSeq = [];
  }
  //check end of sequence
  if (userSeq.length == gameSeq.length) {
    level++;
    userSeq = [];
    startSequence();
  }
}

//Check user seq against simons
function checkUserSeq() {
  for (var i = 0; i < userSeq.lengthl; i++) {
    if (userSeq[i] != gameSeq[i]) {
      return false;
    }
  }
  return true;
}

//Display Error
function displayError() {
  console.log("error");
  var counter = 0;
  var myError = setInterval(function(){
    levelDisplay.textContent = "error";
    counter++;
    if(counter == 3) {
      levelDisplay.textContent = level;
      clearInterval(myError);
      userSeq = [];
      counter = 0;
    }
  }, 500);
}


function startSequence() {
  levelDisplay.textContent = level;
  getRandomNum();
  var i = 0;
  var myInterval = setInterval(function(){
    id = gameSeq[i];
    color = document.getElementById(id).getAttribute("class");
    color = color.split(" ")[0];
    console.log(id + " " + color);
    addClass(id, color);
    i++;
    if (i = gameSeq.length) {
      clearInterval(myInterval);
    }
  }, 1000);

}

//generate random number
function getRandomNum() {
  var random = Math.floor(Math.random() * 4);
  gameSeq.push(random);
}

//Add temporary addClass
function addClass(id, color) {
  document.getElementById(id).classList.add(color + "-active");

  setTimeout(function(){
    document.getElementById(id).classList.remove(color + "-active");
  });
}
//2 - use replicates sequence
