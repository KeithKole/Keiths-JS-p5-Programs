function CircleImage(i, j) {
    this.i = i;
    this.j = j;
    this.x = this.i * circleImg.width;
    this.y = this.j * circleImg.height;
    this.isTurning = false;
    this.startingAngles = [0, 90, 180, 270];
    this.angle = this.startingAngles[floor(random(0, this.startingAngles.length))];
    this.startAngle = this.angle;

    this.display = function () {
        push();
        translate(this.x + (circleImg.width / 2), this.y + (circleImg.height / 2));
        rotate(this.angle);
        image(circleImg, -(circleImg.width / 2), -(circleImg.height / 2));
        pop();
    }

    this.update = function () {

        if (!this.isTurning) {
            var number = floor(random(0, 1000));
            if (number == 1) {
                this.isTurning = true;
            }
        } else {
            this.angle += 10;
        }

        if (this.angle != this.startAngle && this.angle % 90 == 0) {
            this.isTurning = false;
        }

        if (this.angle == 360) {
            this.angle = 0;
        }

    }
}
