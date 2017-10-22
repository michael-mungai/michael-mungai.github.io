var date = new Date()
var min = date.getMinutes()
var hrs = date.getHours()
var seconds = date.getSeconds()
var clockContainer = document.getElementById("clock-container");
var interval = setInterval(secs, 1000);
var int2 = setInterval(mins, 1000);
var int3 = setInterval(hourContainer, 1000);


for (var i = 0; i < (hrs - 1); i++) {
    hourBlocks();
}

console.log(hrs + ":" + min + ":" + seconds)


function secs() {
  var date = new Date()
  var min = date.getMinutes()
  var hrs = date.getHours()
  var seconds = date.getSeconds()
  var secs = document.createElement("div");
  secs.id = 'secs';
  var box = document.getElementById('secs');
  clockContainer.appendChild(secs);
  box.style.top = ((seconds * 10) + "px");
  if (seconds === 59) {
    clearInterval(interval);
  }
  clockContainer.removeChild(secs);
}
interval = setInterval(secs, 1000);

function mins() {
  var date = new Date()
  var min = date.getMinutes()
  var hrs = date.getHours()
  var seconds = date.getSeconds()
  var block = document.getElementById('block');
  block.style.height = ((min * 10) + "px");
  block.style.top = ((600 - (min * 10)) + "px");
}

function hourContainer() {
  var date = new Date()
  var min = date.getMinutes()
  var hrs = date.getHours()
  var seconds = date.getSeconds()
  var hourBlock = document.getElementById("hour-container");
  hourBlock.style.left = ((hrs + hrs) + (hrs * 50) + "px");
}

function hourBlocks() {
  var hourColumnContainer = document.createElement("div");
  hourColumnContainer.id = 'hour-blocks';
  var hourColumn = document.getElementById("hour-blocks");
  clockContainer.appendChild(hourColumnContainer);
}
