var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var xImages;
var yImages;
var circleImg;
var imgArray = [];


function preload() {
    circleImg = loadImage('half_circle_40.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    var xImages = ceil(windowWidth / circleImg.width);
    var yImages = ceil(windowWidth / circleImg.height);
    angleMode(DEGREES);


    for (var j = 0; j < yImages; j++) {
        for (var i = 0; i < xImages; i++) {
            imgArray.push(new CircleImage(i, j));
        }
    }

}

function draw() {
    background(255);

    for (var i = 0; i < imgArray.length; i++) {
        imgArray[i].display();
        imgArray[i].update();
    }

}
