var increment = 10;
var x = 0;
var y = 0;

var lineArray = [];
var paintImg;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var printAll = false;
var printed = false;


function preload() {
    paintImg = loadImage('paint.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(4);

}

function draw() {
    if (!printAll) {
        if (random(1) >= .5) {
            line(x, y, x + increment, y + increment);
            lineArray.push(new Line(x, y, "right"));
        } else {
            line(x + increment, y, x, y + increment);
            lineArray.push(new Line(x, y, "left"));
        }

        x += increment;

        if (x > windowWidth) {
            x = 0;
            y += increment;
        }
    } else if (!printed && printAll) {
        for (var i = 0; i < lineArray.length; i++) {
            lineArray[i].display();
        }
        printed = true;
    }

    image(paintImg, 10, 10);


}

function mousePressed() {
    if (mouseX >= 10 && mouseX <= 60 && mouseY >= 10 && mouseY <= 60) {
        if (!printAll) {
            var xLines = windowWidth / increment;
            var yLines = windowWidth / increment;

            var x = lineArray[lineArray.length - 1].x + increment;
            var y = lineArray[lineArray.length - 1].y;

            while (lineArray.length < (xLines * yLines)) {

                if (x > windowWidth) {
                    x = 0;   
                    y += increment;
                }

                if (random(1) >= .5) {
                    lineArray.push(new Line(x, y, "right"));
                } else {
                    lineArray.push(new Line(x, y, "left"));
                }

                x += increment;
            }

        }
        printAll = true;
    }


}
