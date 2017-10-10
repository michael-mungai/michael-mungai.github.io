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
        if (i % i < i) {
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
