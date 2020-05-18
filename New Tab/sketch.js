var width;
var height;
var circles = [];
var bookmarks;

//32, 33, 36
//50, 54, 57
//Two actions, Swap or move

function preload() {
	//bookmarks = loadJSON('C:/Users/user/AppData/Local/Google/Chrome/User Data/Default/Bookmarks');
}

function setup() {
	width = window.innerWidth;
	height = window.innerHeight;
	createCanvas(width, height);
	background(32, 33, 36);
	ellipseMode(CENTER)
	noStroke();

	var index = 0;
	for (var i = width / 4; i < width * (3 / 4); i += 160) {
		for (var j = height / 4; j < height * (3 / 4); j += 160) {
			var circle = new Circle(i, j);
			circle.active = getRandomInt(0, 1);
			circles[index] = circle;
			index++;
		}
	}

}

function draw() {
	background(32, 33, 36);
	for (var i = 0; i < circles.length; i++) {
		circles[i].update();
		circles[i].show();
	}

	var rand = Math.random();
	if (rand <= .008) {
		var activeCircle = findRandomCircle(1);
		var unactiveCircle = findRandomCircle(0);

		activeCircle.moving = 1;
		unactiveCircle.moving = 1;
		activeCircle.targetX = unactiveCircle.x;
		activeCircle.targetY = unactiveCircle.y;
		unactiveCircle.targetX = activeCircle.x;
		unactiveCircle.targetY = activeCircle.y;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findRandomCircle(color) {
	var randIndex;
	var randCircle;
	do {
		randIndex = getRandomInt(0, circles.length - 1);
		randCircle = circles[randIndex];
	} while (randCircle.active == color || randCircle.moving == 1);
	return randCircle;
}
