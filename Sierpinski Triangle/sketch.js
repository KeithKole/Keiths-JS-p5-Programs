var a;
var b;
var c;
var calls = 0;

function setup() {
	createCanvas(800, 800);
	background(255);
	stroke(0);

	a = middle(createVector(0, 0), createVector(width, 0));
	b = createVector(width, height - 5);
	c = createVector(0, height - 5);
}

function draw() {
	drawT(calls, a, b, c);
	noLoop();
}


function drawT(n, a, b, c) {
	line(a.x, a.y, b.x, b.y);
	line(b.x, b.y, c.x, c.y);
	line(c.x, c.y, a.x, a.y);

	if (n == 0) {

	} else {
		var ab = middle(a, b);
		var bc = middle(b, c);
		var ca = middle(c, a);

		drawT(n - 1, a, ab, ca);
		drawT(n - 1, ab, b, bc);
		drawT(n - 1, c, ca, bc);
	}
}


function middle(a, b) {
	return createVector((a.x + b.x) / 2, (a.y + b.y) / 2);
}

function mousePressed() {
	if (calls <= 6) {
		calls++;
	}
	loop();
}
