document.write('<h2>1</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i < 5) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>2</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (j < 5) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>3</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i === j) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>4</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i >= j) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>5</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i % 2 === 0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>6</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i % 2 === 0 && j < 5 || i % 2 != 0 && j >= 5) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>7</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i % 2 === 0 && j % 2 || i % 2 != 0 && j % 2 != 0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<h2>8</h2>');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i % 2 === 0 && j % 2 === 0 || i % 2 != 0 && j % 2 != 0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

function updateTime () {
  var clockHolder = document.getElementById("clock");
  var now = new Date ();
  var seconds = now.getSeconds();
  now = now.toTimeString();

  if (seconds < 1) {
    clockHolder.style.color = "red";
  } else if (seconds < 2) {
    //green
    clockHolder.style.color = "green";
  } else {
    //blue
    clockHolder.style.color = "blue";
  }

  clockHolder.innerHTML = now;
}

setInterval(updateTime, 1000);

/* function fallDown() {
  for (var i = 0; i < 1; i++) {
    fall += 10;
    block.style.top = (fall + "px");
    console.log(i);
  }
}
  setInterval(fallDown, 1000); */

/* var fall = 0;
var block = document.getElementById("second-block");
var fallAction = block.style.top;
block.style.top = fall;
var now = new Date ();
var seconds = now.getSeconds();
now = now.toTimeString();
var secs = 60;
for (var i = 1; i <= secs; i++){

}; */

/*var counter = 0;
var i = setInterval(function(){
    console.log(i);

    counter++;
    if(counter === 60) {
        clearInterval(i);
    }
}, 1000); */




 var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      console.log(i);         //  your code here
      i++;                     //  increment the counter
      if (i < 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 1000)
}

myLoop();                      //  start the loop
