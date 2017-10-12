
function updateTime () {
  var clockHolder = document.getElementById("clock");
  var now = new Date ();
  var seconds = now.getSeconds();
  now = now.toTimeString();

  if (seconds < 20) {
    //red
    clockHolder.style.color = "red";
  } else if (seconds < 40) {
    //green
    clockHolder.style.color = "green";
  } else {
    //blue
    clockHolder.style.color = "blue";
  }

  clockHolder.innerHTML = now;
}

setInterval(updateTime, 1000);
