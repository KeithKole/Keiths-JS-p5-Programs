var n = 0;

function setup() {
	createCanvas(800, 800);
	background(0);
	noStroke();
	rectMode(CENTER);
}

function draw() {
	divide(n, 400, createVector(width / 2, height / 2));
	noLoop();
}

function divide(n, w, v) {
	rect(v.x, v.y, w, w);

	if (n == 0) {

	} else {
		divide(n - 1, w / 2, createVector(v.x - w / 2, v.y - w / 2));
		divide(n - 1, w / 2, createVector(v.x + w / 2, v.y + w / 2));
		divide(n - 1, w / 2, createVector(v.x - w / 2, v.y + w / 2));
		divide(n - 1, w / 2, createVector(v.x + w / 2, v.y - w / 2));
	}
}

function mousePressed() {
	if (n < 7) {
		n++;
	}
	loop();
}
