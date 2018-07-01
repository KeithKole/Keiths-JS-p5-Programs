var x = 0;
var y = 0;
var calls = 0;

function setup() {
	createCanvas(600, 600);
	background(255);
}


function draw() {
	for (var i = 0; i < 500; i++) {
		stroke(0, 127, 0);
		strokeWeight(2);
		var px = map(x, -2.1820, 2.6558, 0, width);
		var py = map(y, 0, 9.9983, height, 0);
		point(px, py);
		nextPoint();
	}
}


function nextPoint() {
	calls++;
	var nextX;
	var nextY;

	var random = Math.random(1);


	if (random <= .01) {
		nextX = 0;
		nextY = .16 * y;
	} else if (random <= .86) {
		nextX = (.85 * x) + (.04 * y);
		nextY = (-.04 * x) + (.85 * y) + 1.6;
	} else if (random <= .93) {
		nextX = (.2 * x) - (.26 * y);
		nextY = (.23 * x) + (.22 * y) + 1.6;
	} else {
		nextX = (-.15 * x) + (.28 * y);
		nextY = (.26 * x) + (.24 * y) + .44;
	}

	x = nextX;
	y = nextY;

}
