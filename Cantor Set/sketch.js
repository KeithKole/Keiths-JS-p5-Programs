var thicc = 10;
var recStart = 5;
var recEnd = 735;
var y = 5;
var calls = 0;

function setup() {
	createCanvas(800, 800);
	background(255);
	fill(0);
	noStroke();
	rectMode(CORNERS);
	rect(recStart, y, recEnd, y + thicc);
	y += (thicc + 8);
	divide(recStart, recEnd, y);
}

function draw() {

}

function divide(start, end, h) {
	calls++;
	if (h > 200) {

	} else {
		rect(start, h, (end - start) * (1 / 3) + start, h + thicc);
		rect((end - start) * (2 / 3) + start, h, end, h + thicc);

		var newHeight = h + thicc + 8;
		divide(start, (end - start) * (1 / 3) + start, newHeight);
		divide((end - start) * (2 / 3) + start, end, newHeight);

	}

}
