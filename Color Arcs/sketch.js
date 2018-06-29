var wWidth = 500;
var wHeight = 500;
var arcs = [];

var hVel = 4;
var lVel = 2;

function setup() {
    createCanvas(wWidth, wHeight);
    noFill();
    strokeWeight(1.5);
    angleMode(DEGREES);

    for (var x = 0; x < wWidth; x += 60) {
        for (var y = 0; y < wHeight; y += 60) {
            arcs.push(new Arc(x, y));
        }
    }

    for (var x = -30; x < wWidth; x += 60) {
        for (var y = 30; y < wHeight; y += 60) {
            arcs.push(new Arc(x, y));
        }
    }
}

function draw() {
    background(20, 42, 50);
    for (var i = 0; i < arcs.length; i++) {
        arcs[i].show();
    }
}
