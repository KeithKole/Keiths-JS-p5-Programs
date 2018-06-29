var balls = [];

function Ball(x, y, d) {

	this.x = x;
	this.y = y;
	this.xVel = random(-4, 4);
	this.yVel = random(-4, 4);
	this.diameter = d;
	this.trans = map(this.diameter, 10, 25, 100, 255);

	this.display = function () {
		fill(255, this.trans);
		noStroke();
		ellipse(this.x, this.y, this.diameter, this.diameter);

	}

	this.update = function () {

		this.x += this.xVel;
		this.y += this.yVel;

		if (this.x <= (this.diameter / 2) || this.x >= 600 - (this.diameter / 2)) {
			this.xVel = -this.xVel;
		}

		if (this.y <= 0 + (this.diameter / 2) || this.y >= 600 - (this.diameter / 2)) {
			this.yVel = -this.yVel;
		}

		for (var i = 0; i < balls.length; i++) {
			if (balls[i] != this) {

				var d = dist(this.x, this.y, balls[i].x, balls[i].y);

				if (d < (this.diameter / 2) + (balls[i].diameter / 2)) {
					var xV = 0;
					var yV = 0;
					xV = this.xVel;
					yV = this.yVel;

					this.xVel = balls[i].xVel;
					this.yVel = balls[i].yVel;

					balls[i].xVel = xV;
					balls[i].yVel = yV;

				}
			}
		}
	}


}

function setup() {
	createCanvas(600, 600);

}

function draw() {
	background(70);
	for (var i = 0; i < balls.length; i++) {
		balls[i].display();
		balls[i].update();
	}
}

function mousePressed() {
	var overlapping = false;
	var found = false;
	var diameter = random(10, 25);
	var randomX = 0;
	var randomY = 0;
	while (!found) {
		randomX = getRandomNum(diameter);
		randomY = getRandomNum(diameter);
		for (var i = 0; i < balls.length; i++) {
			var d = dist(randomX, randomY, balls[i].x, balls[i].y);

			if (d < (diameter / 2) + (balls[i].diameter / 2)) {
				overlapping = true;
			}
		}
		if (!overlapping) {
			found = true;
		}
		overlapping = false;
	}
	balls.push(new Ball(randomX, randomY, diameter));
	found = false;
}

function getRandomNum(diameter) {
	return random(0 + (diameter / 2), 600 - (diameter / 2))
}
