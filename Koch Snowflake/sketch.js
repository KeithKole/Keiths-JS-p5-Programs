var n = 0;


function setup() {
	createCanvas(1000, 1000);
	background(255);
	angleMode(DEGREES);
	stroke(0);
}

function draw() {
	background(255);
	kochline(n, createVector(100, 740), createVector(900, 740), createVector(500, 47.179676972));
}

function kochline(n, a, b, c) {
	koch(n, a, b);
	koch(n, b, c);
	koch(n, c, a);
	noloop();
}

function koch(n, start, end) {
	if (n == 0) {
		line(start.x, start.y, end.x, end.y);

	} else {


		var a = start.copy();

		var v = p5.Vector.sub(end, start);
		v.div(3);
		v.add(start);
		var b = v;

		var s = start.copy();
		var temp = p5.Vector.sub(end, start);
		temp.div(3);
		s.add(temp);
		temp = turn(temp, 60);
		s.add(temp);
		var c = s;

		var y = p5.Vector.sub(end, start);
		y.mult(2 / 3);
		y.add(start);
		var d = y;

		var e = end.copy();

		koch(n - 1, a, b);
		koch(n - 1, b, c);
		koch(n - 1, c, d);
		koch(n - 1, d, e);
	}




}

function mousePressed() {
	if (n < 6) {
		n++;
	}
	loop();

}

function turn(v, degree) {
	var xTemp = v.x;

	v.x = (v.x * cos(degree) - (v.y * sin(degree)));
	v.y = (xTemp * sin(degree) + (v.y * cos(degree)));
	return v;
}
