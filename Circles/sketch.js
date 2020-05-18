var width;
var height;
var circles = [];

function setup() {
	createCanvas((width = 600), (height = 600));
    noFill();
    stroke(255);
    circles[0] = new Circle(width / 2, height / 2, width * (2/3), height * (2/3), 1);
    circles[0].x = width / 2;
    circles[0].y = height /2;
    for (var i = 1, size = (width * (1/3)); i < 7; i++, size/=2) {
        circles[i] = new Circle(circles[i-1].prevX, circles[i-1].prevY, size, i);
    }
}

function draw() {
    background(40, 61, 72);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    
    ellipse(width / 2, height / 2, width * (2/3), height * (2/3));
    
    for (var i = 1; i < circles.length; i++) {
        circles[i].prevX = circles[i-1].x;
        circles[i].prevY = circles[i-1].y;
        circles[i].update();
        circles[i].show();
    }
}
