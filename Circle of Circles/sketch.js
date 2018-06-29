var circles = [];
var width1 = 500;
var height1 = 500;
var radius = 100;
var circleNumber = 0;
var maxRadius = 0;

function setup() {
    createCanvas(width1, height1);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    fill(0);

    for (var angle = 0, circleRadius = .5; angle < 360; angle += 10, circleRadius += .5) {
        circleNumber++;
        circles.push(new Circle((width / 2) + (cos(angle) * radius), (height / 2) + (sin(angle) * radius), circleRadius));

        if (circleNumber == 35) {
            maxRadius = circleRadius;
        }
    }

    for (var i = 0; i < circles.length; i++) {
        circles[i].mRadius = maxRadius;
    }

}

function draw() {
    background(255);

    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
        circles[i].update();
    }


}
