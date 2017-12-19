//Upon clicking anywhere on the page, create 100 new snowflakes
//Distribute these snowflakes randomly on the page using mathrandom and top/left positioning



// Get a reference to the snow flake container
var snowflake = document.getElementById("snowflake");var snowflake = document.getElementById("snowflake");
var body = document.getElementById("body");
var position = 10;


// Set up a click event handler for the document
document.addEventListener("click", createSnowflake);

function createSnowflake() {
  var clone = snowflake.cloneNode(true);
  clone.style.top = (position + (position+=10) + "px");
  // Clone the first snow flake container and append the clone to the body
  body.appendChild(clone);
}

document.addEventListener("keypress", createNewSnowflake)
function createNewSnowflake() {
  var clone = snowflake.cloneNode(true);
  clone.style.left = (position + (position+=10) + "px");
  // Clone the first snow flake container and append the clone to the body
  body.appendChild(clone);
}
